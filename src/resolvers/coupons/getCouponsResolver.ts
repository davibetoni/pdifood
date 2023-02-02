import { GetCouponByIdService } from "../../services/coupons/getCouponByIdService";
import { GetCouponsService } from "../../services/coupons/getCouponsService";
import { IContext } from "../../types/IContext";

interface CouponQuery {
  code: string;
  value: number;
  percent: boolean;
  validDate: Date;
}

interface GetCouponQuery {
  id: string;
  query: CouponQuery;
}

export async function getCouponsResolver(
  _,
  args: GetCouponQuery,
  context: IContext
) {
  const { id, query } = args;
  const { repositories } = context;
  const getCouponByIdService = new GetCouponByIdService(
    repositories.couponRepository
  );
  const getCouponsService = new GetCouponsService(
    repositories.couponRepository
  );

  if (id) {
    return [await getCouponByIdService.execute(id)];
  }
  return await getCouponsService.execute(query);
}
