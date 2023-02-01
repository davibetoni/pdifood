import { GraphQLError } from "graphql";
import { OrderProduct } from "../../entities/OrderProduct";
export class QuantityOrderService {
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
