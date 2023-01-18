import Sequelize, { Model } from "sequelize";
import { Json } from "sequelize/types/utils";
import { uuid } from "uuidv4";
import { sequelize } from "../database";

interface CreateProductAtributtes {
  restaurantId: string;
  name: string;
  price: number;
  ingredients: Json;
  imageUrl: string;
}

interface ProductAtributtes extends CreateProductAtributtes {
  id: string;
  createdAt: Date;
  updatedAt: Date;
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
  createdAt: Date;
  updatedAt: Date;
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
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
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
