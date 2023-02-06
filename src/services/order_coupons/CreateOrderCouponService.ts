import { GraphQLError } from "graphql";
import {
  OrderCouponRepository,
  OrderCouponsParams,
} from "../../repositories/OrderCouponRepository";

export class CreateOrderCouponService {
  constructor(private orderCouponRepository: OrderCouponRepository) {}

  async execute(content: OrderCouponsParams) {
    try {
      return await this.orderCouponRepository.createOrderCoupon(content);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
