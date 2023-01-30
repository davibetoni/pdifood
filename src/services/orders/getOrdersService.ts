import { GraphQLError } from "graphql";
import {
  OrderParams,
  OrderRepository,
} from "../../repositories/OrderRepository";

export class GetOrdersService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(params: OrderParams) {
    try {
      return await this.orderRepository.getOrders(params);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
