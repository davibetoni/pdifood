import { GraphQLError } from "graphql";
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
  const { services, userAttributes } = context;

  if (userAttributes.role !== "admin") {
    throw new GraphQLError("You can't create a Coupon.");
  }

  return await services.createCouponService.execute(content);
}
