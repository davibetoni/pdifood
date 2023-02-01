import { GraphQLError } from "graphql";
import { OrderProduct } from "../../entities/OrderProduct";
import { OrderProductRepository } from "../../repositories/OrderProductRepository";
import { OrderRepository } from "../../repositories/OrderRepository";

export class QuantityOrderService {
  constructor(
    private orderRepository: OrderRepository
  ) {}

  async execute(orderId: string) {
    try {
      const order = await this.orderRepository.getOrderById(orderId);
      const orderProducts: [OrderProduct] = order.dataValues.orderProducts;

      let totalQuantity = 0;

      orderProducts.map((orderProduct) => {
        totalQuantity += orderProduct.quantity;
      });

      return totalQuantity;
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
