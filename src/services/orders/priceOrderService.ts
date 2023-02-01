import { GraphQLError } from "graphql";
import { OrderProduct } from "../../entities/OrderProduct";
import { OrderRepository } from "../../repositories/OrderRepository";

export class PriceOrderService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(orderId: string) {
    try {
      const order = await this.orderRepository.getOrderById(orderId);
      const orderProducts: [OrderProduct] = order.dataValues.orderProducts;

      let totalPrice = 0;

      orderProducts.map((orderProduct) => {
        totalPrice += +orderProduct.price;
      });

      return totalPrice.toFixed(2);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
