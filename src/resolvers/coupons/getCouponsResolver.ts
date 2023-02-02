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
  const { services } = context;

  if (id) {
    return [await services.getCouponByIdService.execute(id)];
  }
  return await services.getCouponsService.execute(query);
}
