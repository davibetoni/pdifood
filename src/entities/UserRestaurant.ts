import Sequelize, { Model } from "sequelize";
import { sequelize } from "../database";

interface CreateUserRestaurantAttributes {
  restaurantId: string;
  userId: string;
  userName: string;
  restaurantName: string;
}

export class UserRestaurant
  extends Model<CreateUserRestaurantAttributes>
  implements CreateUserRestaurantAttributes
{
  restaurantId: string;
  userId: string;
  userName: string;
  restaurantName: string;
}

UserRestaurant.init(
  {
    userId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    restaurantId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    userName: {
      type: Sequelize.STRING,
    },
    restaurantName: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    underscored: true,
    tableName: "user_restaurants",
  }
);
