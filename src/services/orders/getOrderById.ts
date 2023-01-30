import { GraphQLError } from "graphql";
import { OrderRepository } from "../../repositories/OrderRepository";

export class GetOrderByIdService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(id: string) {
    try {
      return await this.orderRepository.getOrderById(id);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
