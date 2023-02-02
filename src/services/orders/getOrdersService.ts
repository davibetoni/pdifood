import { GraphQLError } from "graphql";
import {
  OrderParams,
  OrderRepository,
} from "../../repositories/OrderRepository";

export class GetOrdersService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(params: OrderParams, userId: string) {
    try {
      return await this.orderRepository.getOrders(params, userId);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
