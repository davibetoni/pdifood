import { GraphQLError } from "graphql";
import {
  CouponRepository,
  CouponsParams,
} from "../../repositories/CouponRepository";

export class GetCouponsService {
  constructor(private couponRepository: CouponRepository) {}

  async execute(query: CouponsParams) {
    try {
      return await this.couponRepository.getCoupons(query);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
