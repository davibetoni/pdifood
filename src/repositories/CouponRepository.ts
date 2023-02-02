import { Coupon } from "../entities/Coupon";

export interface CouponsParams {
  code: string;
  value: number;
  percent: boolean;
  validDate: Date;
}

export interface CouponRepository {
  getCoupons(query: CouponsParams): Promise<Coupon[]>;
  getCouponById(id: string): Promise<Coupon>;
  getCouponByCode(code: string): Promise<Coupon>;
  createCoupon(content: CouponsParams): Promise<Coupon>;
}
