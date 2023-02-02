import { GraphQLError } from "graphql";
import { CreateCouponService } from "../../services/coupons/createCouponService";
import { IContext } from "../../types/IContext";

interface CouponInput {
  content: {
    code: string;
    value: number;
    percent: boolean;
    validDate: Date;
  };
}

export async function createCouponResolver(
  _,
  args: CouponInput,
  context: IContext
) {
  const { content } = args;
  const { repositories, userAttributes } = context;
  const createCouponService = new CreateCouponService(
    repositories.couponRepository
  );

  if (userAttributes.role !== "admin") {
    throw new GraphQLError("You can't create a Coupon.");
  }

  return await createCouponService.execute(content);
}
