import Sequelize, { Model } from "sequelize";
import { sequelize } from "../database";

interface OrderCouponAttributes {
  orderId: string;
  couponId: string;
}

export class OrderCoupon extends Model implements OrderCouponAttributes {
  orderId: string;
  couponId: string;
}

OrderCoupon.init(
  {
    orderId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    couponId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    tableName: "order_coupons",
  }
);
