import { OrderCoupon } from "../../entities/OrderCoupon";
import {
  OrderCouponsParams,
  OrderCouponRepository,
} from "../OrderCouponRepository";

export class OrderCouponSequelize implements OrderCouponRepository {
  async getOrderCouponsByIds(
    orderId: string,
    couponId: string
  ): Promise<OrderCoupon> {
    return await OrderCoupon.findOne({ where: { orderId, couponId } });
  }

  async getOrderCoupons(query: OrderCouponsParams): Promise<OrderCoupon[]> {
    let where = {};
    if (query) {
      const { couponId, orderId } = query;
      where = { couponId, orderId };
    }

    return await OrderCoupon.findAll({ where });
  }

  async createOrderCoupon(content: OrderCouponsParams): Promise<OrderCoupon> {
    const { couponId, orderId } = content;
    return await OrderCoupon.create({ couponId, orderId });
  }
}
