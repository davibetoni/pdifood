import { GraphQLError } from "graphql";
import {
  OrderProductRepository,
  OrderProductsParams,
} from "../../repositories/OrderProductRepository";

export class GetOrderProductByIdsService {
  constructor(private orderProductRepository: OrderProductRepository) {}

  async execute(query: OrderProductsParams) {
    const { orderId, productId } = query;
    try {
      return await this.orderProductRepository.getOrderProductByIds(
        orderId,
        productId
      );
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
