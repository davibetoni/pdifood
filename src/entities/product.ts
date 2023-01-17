import Sequelize, { Model } from "sequelize";
import { Json } from "sequelize/types/utils";
import { uuid } from "uuidv4";
import { sequelize } from "../database";

interface CreateProductAtributtes {
  restaurant_id: string;
  name: string;
  price: number;
  ingredients: Json;
  image_url: string;
}

interface ProductAtributtes extends CreateProductAtributtes {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export class Product
  extends Model<ProductAtributtes, CreateProductAtributtes>
  implements ProductAtributtes
{
  id: string;
  restaurant_id: string;
  name: string;
  price: number;
  ingredients: Json;
  image_url: string;
  created_at: Date;
  updated_at: Date;
}

Product.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    restaurant_id: {
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
    image_url: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
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
