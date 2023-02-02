import { GraphQLError } from "graphql";
import { OrderRepository } from "../../repositories/OrderRepository";

export class GetOrderByIdService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(id: string, userId: string) {
    try {
      const order = await this.orderRepository.getOrderById(id);

      if (userId && order.id != userId) {
        throw new GraphQLError("You can't see this order.");
      }

      return order;
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
