import { GraphQLError } from "graphql";
import {
  CouponRepository,
  CouponsQuery,
} from "../../repositories/CouponRepository";

export class GetCouponsService {
  constructor(private couponRepository: CouponRepository) {}

  async execute(query: CouponsQuery) {
    try {
      return await this.couponRepository.getCoupons(query);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
