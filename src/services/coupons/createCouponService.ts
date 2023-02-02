import { GraphQLError } from "graphql";
import {
  CouponRepository,
  CouponsParams,
} from "../../repositories/CouponRepository";

export class CreateCouponService {
  constructor(private couponRepository: CouponRepository) {}

  async execute(content: CouponsParams) {
    const { code } = content;

    const coupon = await this.couponRepository.getCouponByCode(code);

    if (coupon) {
      throw new GraphQLError("Already exist a coupon with this code.");
    }

    try {
      return await this.couponRepository.createCoupon(content);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
