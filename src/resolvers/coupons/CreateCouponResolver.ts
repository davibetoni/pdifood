import { GraphQLError } from "graphql";
import { CreateCouponService } from "../../services/coupons/createCouponService";
import { IContext } from "../../types/IContext";

export interface CouponInput {
  content: {
    code: string;
    value: number;
    percent: boolean;
    validDate: Date;
  };
}

export class CreateCouponResolver {
  constructor(private createCouponService: CreateCouponService) {}

  async handle(_, args: CouponInput, context: IContext) {
    const { content } = args;
    const { userAttributes } = context;

    if (userAttributes.role !== "admin") {
      throw new GraphQLError("You can't create a Coupon.");
    }

    return await this.createCouponService.execute(content);
  }
}
