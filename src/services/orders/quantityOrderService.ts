import { GraphQLError } from "graphql";
import { OrderProduct } from "../../entities/OrderProduct";
import { OrderProductRepository } from "../../repositories/OrderProductRepository";
import { OrderRepository } from "../../repositories/OrderRepository";

export class QuantityOrderService {
  constructor(
    private orderRepository: OrderRepository
  ) {}

  async execute(orderProducts: OrderProduct[]) {
    try {
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
