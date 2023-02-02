import { Op } from "sequelize";
import { Coupon } from "../../entities/Coupon";
import { CouponRepository, CouponsParams } from "../CouponRepository";

export class CouponSequelize implements CouponRepository {
  async getCouponByCode(code: string): Promise<Coupon> {
    return await Coupon.findOne({ where: { code } });
  }

  async getCouponById(id: string): Promise<Coupon> {
    return await Coupon.findByPk(id);
  }

  async createCoupon(content: CouponsParams): Promise<Coupon> {
    return await Coupon.create(content);
  }

  async getCoupons(query: CouponsParams): Promise<Coupon[]> {
    let where = {};
    if (query) {
      const { code, percent, validDate, value } = query;

      if (code) {
        where = { code: { [Op.like]: `%${code}%` } };
      }

      if (percent) {
        where = {
          [Op.and]: [{ ...where }, { percent }],
        };
      }

      if (validDate) {
        where = {
          [Op.and]: [{ ...where }, { validDate: { [Op.gte]: validDate } }],
        };
      }

      if (value) {
        where = {
          [Op.and]: [{ ...where }, { value }],
        };
      }
    }
    return await Coupon.findAll({ where });
  }
}
