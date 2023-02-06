import { OrderCoupon } from "../entities/OrderCoupon";

export interface OrderCouponsParams {
  orderId: string;
  couponId: string;
}

export interface OrderCouponRepository {
  getOrderCouponsByIds(orderId: string, couponId: string): Promise<OrderCoupon>;
  getOrderCoupons(query: OrderCouponsParams): Promise<OrderCoupon[]>;
  createOrderCoupon(content: OrderCouponsParams): Promise<OrderCoupon>;
}
