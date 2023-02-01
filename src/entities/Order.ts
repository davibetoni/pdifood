import Sequelize, { Model } from "sequelize";
import { uuid } from "uuidv4";
import { sequelize } from "../database";
import { OrderProduct } from "./OrderProduct";

interface OrderAttributes {
  id: string;
  userId: string;
  finishedBy: string;
  finishedAt: Date;
}

export class Order extends Model implements OrderAttributes {
  id: string;
  userId: string;
  finishedBy: string;
  finishedAt: Date;
  value: number;
  orderProducts: OrderProduct[]
}

Order.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.STRING,
    },
    finishedBy: {
      type: Sequelize.STRING,
    },
    finishedAt: {
      type: Sequelize.DATE,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    tableName: "orders",
  }
);

Order.beforeCreate((order) => {
  order.id = uuid();
});

Order.hasMany(OrderProduct, {
  as: "orderProducts",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: {
    allowNull: false,
    name: "orderId",
    field: "order_id",
  },
});

OrderProduct.belongsTo(Order, {
  as: "order",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: {
    allowNull: false,
    name: "orderId",
    field: "order_id",
  },
});
