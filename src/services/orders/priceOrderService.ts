import { GraphQLError } from "graphql";
import { OrderProduct } from "../../entities/OrderProduct";
export class PriceOrderService {
  async execute(orderProducts: OrderProduct[]) {
    try {
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
