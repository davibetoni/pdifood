import { GraphQLError } from "graphql";
import { Order } from "../../entities/Order";

export class PriceOrderService {
  async execute(order: Order) {
    try {
      let totalPrice = 0;
      order.orderProducts.map((orderProduct) => {
        totalPrice += +orderProduct.price;
      });

      if (order.coupons) {
        order.coupons.map((coupon) => {
          if (coupon.percent) {
            totalPrice *= 1 - coupon.value / 100;
          } else {
            totalPrice -= coupon.value;
          }
        });
      }

      return totalPrice.toFixed(2);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
