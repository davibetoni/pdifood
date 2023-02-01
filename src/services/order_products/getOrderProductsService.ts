import { GraphQLError } from "graphql";
import {
  OrderProductRepository,
  OrderProductsParams,
} from "../../repositories/OrderProductRepository";

export class GetOrderProductsService {
  constructor(private orderProductRepository: OrderProductRepository) {}

  async execute(query: OrderProductsParams) {
    try {
      return await this.orderProductRepository.getOrderProducts(query);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
