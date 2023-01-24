import Sequelize, { Model } from "sequelize";
import { Json } from "sequelize/types/utils";
import { uuid } from "uuidv4";
import { sequelize } from "../database";
import { OrderProduct } from "./OrderProduct";

interface CreateProductAtributtes {
  restaurantId: string;
  name: string;
  price: number;
  ingredients: Json;
  imageUrl: string;
}

interface ProductAtributtes extends CreateProductAtributtes {
  id: string;
}

export class Product
  extends Model<ProductAtributtes, CreateProductAtributtes>
  implements ProductAtributtes
{
  id: string;
  restaurantId: string;
  name: string;
  price: number;
  ingredients: Json;
  imageUrl: string;
}

Product.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    restaurantId: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.DECIMAL,
    },
    ingredients: {
      type: Sequelize.JSON,
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    tableName: "products",
  }
);

Product.beforeCreate((product) => {
  product.id = uuid();
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
