import { GraphQLError } from "graphql";
import {
  OrderContent,
  OrderRepository,
} from "../../repositories/OrderRepository";

export class CreateOrderService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(content: OrderContent) {
    try {
      return await this.orderRepository.createOrder(content);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
