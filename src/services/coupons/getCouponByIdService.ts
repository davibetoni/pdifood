import { GraphQLError } from "graphql";
import {
  CouponRepository,
  CouponsParams,
} from "../../repositories/CouponRepository";

export class GetCouponByIdService {
  constructor(private couponRepository: CouponRepository) {}

  async execute(couponId: string) {
    try {
      return await this.couponRepository.getCouponById(couponId);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
