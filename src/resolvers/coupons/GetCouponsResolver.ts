import { GetCouponByIdService } from "../../services/coupons/getCouponByIdService";
import { GetCouponsService } from "../../services/coupons/getCouponsService";
import { IContext } from "../../types/IContext";

interface CouponQuery {
  code: string;
  value: number;
  percent: boolean;
  validDate: Date;
}

export interface GetCouponQuery {
  id: string;
  query: CouponQuery;
}

export class GetCouponsResolver {
  constructor(
    private getCouponByIdService: GetCouponByIdService,
    private getCouponsService: GetCouponsService
  ) {}

  async handle(_, args: GetCouponQuery) {
    const { id, query } = args;
  
    if (id) {
      return [await this.getCouponByIdService.execute(id)];
    }
    return await this.getCouponsService.execute(query);
  }
}
