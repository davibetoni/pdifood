import Sequelize, { Model } from "sequelize";
import { sequelize } from "../database";
import { randomUUID as uuid } from "node:crypto";
import { yearFromNow } from "../helpers/date";
import { OrderCoupon } from "./OrderCoupon";
import { Order } from "./Order";

interface CreateCouponAttributes {
  code: string;
  value: number;
  percent: boolean;
  validDate: Date;
}

interface CouponAttributes extends CreateCouponAttributes {
  id: string;
}

export class Coupon
  extends Model<CouponAttributes, CreateCouponAttributes>
  implements CouponAttributes
{
  id: string;
  code: string;
  value: number;
  percent: boolean;
  validDate: Date;
}

Coupon.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    code: {
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.DECIMAL,
    },
    percent: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    validDate: {
      type: Sequelize.DATE,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    tableName: "coupons",
  }
);

Coupon.beforeCreate((coupon) => {
  coupon.id = uuid();

  if (!coupon.validDate) {
    coupon.validDate = yearFromNow();
  }
});

Order.belongsToMany(Coupon, {
  as: "coupons",
  through: OrderCoupon,
  otherKey: {
    allowNull: false,
    name: "couponId",
    field: "coupon_id",
  },
});
