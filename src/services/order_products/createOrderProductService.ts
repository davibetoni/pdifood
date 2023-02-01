import { GraphQLError } from "graphql";
import {
  OrderProductRepository,
  OrderProductsAttributes,
} from "../../repositories/OrderProductRepository";

export class CreateOrderProductService {
  constructor(private orderProductRepository: OrderProductRepository) {}

  async execute(content: OrderProductsAttributes) {
    const { orderId, productId, quantity } = content;

    if (quantity <= 0) {
      throw new GraphQLError("Quantity must be greater than 0.");
    }

    const orderProduct = await this.orderProductRepository.getOrderProductByIds(
      orderId,
      productId
    );

    try {
      if (orderProduct) {
        return await this.orderProductRepository.updateOrderProductQuantity(
          orderProduct,
          quantity
        );
      } else {
        return await this.orderProductRepository.createOrderProduct(content);
      }
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
