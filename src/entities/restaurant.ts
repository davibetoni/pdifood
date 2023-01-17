import { randomUUID as uuid } from "node:crypto";
import Sequelize, { Model } from "sequelize";
import { sequelize } from "../database";
import { GraphQLError } from "graphql";
import { cnpjIsValid, cnpjToNumber } from "../helpers/cpf-cnpj";
import { Product } from "./product";

interface CreateRestaurantAttributes {
  name: string;
  cnpj: string;
}

interface RestaurantAttributes extends CreateRestaurantAttributes {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export class Restaurant
  extends Model<RestaurantAttributes, CreateRestaurantAttributes>
  implements RestaurantAttributes
{
  id: string;
  cnpj: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

Restaurant.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    cnpj: {
      type: Sequelize.STRING,
      validate: {
        validCnpj() {
          if (!cnpjIsValid(this.cnpj)) {
            throw new GraphQLError("CNPJ isn't valid.");
          }
        },
      },
    },
    name: {
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
    tableName: "restaurants",
  }
);

Restaurant.beforeCreate((restaurant) => {
  restaurant.id = uuid();
  restaurant.cnpj = cnpjToNumber(restaurant.cnpj);
});

Restaurant.hasMany(Product, {
  as: "products",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: {
    allowNull: false,
    name: "restaurantId",
    field: "restaurant_id",
  },
});

Product.belongsTo(Restaurant, {
  as: "restaurant",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: {
    allowNull: false,
    name: "restaurantId",
    field: "restaurant_id",
  },
});
