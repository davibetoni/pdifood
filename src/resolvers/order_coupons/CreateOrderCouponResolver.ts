import { CreateOrderCouponService } from "../../services/order_coupons/CreateOrderCouponService";
import { IContext } from "../../types/IContext";

export interface OrderCouponInput {
  content: {
    orderId: string;
    couponId: string;
  };
}

export class CreateOrderCouponResolver {
  constructor(private createOrderCouponService: CreateOrderCouponService) {}

  async handle(_, args: OrderCouponInput, context: IContext) {
    const { content } = args;

    return await this.createOrderCouponService.execute(content);
  }
}
