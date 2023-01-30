import { GraphQLError } from "graphql";
import { OrderRepository } from "../../repositories/OrderRepository";

interface FinishOrderAttributes {
  id: string;
  finishedBy: string;
  finishedAt: Date;
}

export class FinishOrderService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(content: FinishOrderAttributes) {
    const { id, finishedAt, finishedBy } = content;

    const order = await this.orderRepository.getOrderById(id);

    if (!order) {
      throw new GraphQLError("OrderId is not valid.");
    }

    if (order.finishedAt) {
      throw new GraphQLError("Order is already finished.");
    }

    try {
      return await this.orderRepository.finishOrder(order, finishedBy);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
