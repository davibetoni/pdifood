import Sequelize, { Model } from "sequelize";
import { Json } from "sequelize/types/utils";
import { sequelize } from "../database";
import { Product } from "./Product";

interface CreateOrderProductAttributes {
  orderId: string;
  productId: string;
  quantity: number;
  newIngredients: Json;
  price: number;
}

export class OrderProduct
  extends Model<CreateOrderProductAttributes>
  implements CreateOrderProductAttributes
{
  orderId: string;
  productId: string;
  quantity: number;
  newIngredients: Json;
  price: number;
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
    price: {
      type: Sequelize.DECIMAL,
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

OrderProduct.beforeSave( async (orderProduct) => {
  const product = await Product.findByPk(orderProduct.productId);
  orderProduct.price =
    product.price * orderProduct.quantity;
});

Product.hasMany(OrderProduct, {
  as: "orderProducts",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: {
    allowNull: false,
    name: "productId",
    field: "product_id",
  },
});

OrderProduct.belongsTo(Product, {
  as: "product",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: {
    allowNull: false,
    name: "productId",
    field: "product_id",
  },
});
