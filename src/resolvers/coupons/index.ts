import { CouponSequelize } from "../../repositories/implementation/CouponSequelize";
import { CreateCouponService } from "../../services/coupons/createCouponService";
import { GetCouponByIdService } from "../../services/coupons/getCouponByIdService";
import { GetCouponsService } from "../../services/coupons/getCouponsService";
import { IContext } from "../../types/IContext";
import { CouponInput, CreateCouponResolver } from "./CreateCouponResolver";
import { GetCouponQuery, GetCouponsResolver } from "./GetCouponsResolver";

export async function createCouponResolver(
  _,
  args: CouponInput,
  context: IContext
) {
  const couponRepository = new CouponSequelize();
  const createCouponService = new CreateCouponService(couponRepository);
  const createCouponResolver = new CreateCouponResolver(createCouponService);

  return await createCouponResolver.handle(_, args, context);
}

export async function getCouponsResolver(_, args: GetCouponQuery) {
  const couponRepository = new CouponSequelize();
  const getCouponByIdService = new GetCouponByIdService(couponRepository);
  const getCouponsService = new GetCouponsService(couponRepository);
  const getCouponsResolver = new GetCouponsResolver(
    getCouponByIdService,
    getCouponsService
  );

  return await getCouponsResolver.handle(_, args);
}
