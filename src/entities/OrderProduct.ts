import Sequelize, { Model } from "sequelize";
import { Json } from "sequelize/types/utils";
import { sequelize } from "../database";

interface CreateOrderProductAttributes {
  orderId: string;
  productId: string;
  quantity: number;
  newIngredients: Json;
}

export class OrderProduct
  extends Model<CreateOrderProductAttributes>
  implements CreateOrderProductAttributes
{
  orderId: string;
  productId: string;
  quantity: number;
  newIngredients: Json;
}

OrderProduct.init(
  {
    productId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    orderId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    quantity: {
      type: Sequelize.NUMBER,
    },
    newIngredients: {
      type: Sequelize.JSON,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    tableName: "order_products",
  }
);
