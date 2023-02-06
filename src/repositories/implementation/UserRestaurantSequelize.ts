import { Op } from "sequelize";
import { UserRestaurant } from "../../entities/UserRestaurant";
import {
  UserRestaurantParams,
  UserRestaurantRepository,
} from "../UserRestaurantRepository";

export class UserRestaurantSequelize implements UserRestaurantRepository {
  async createUserRestaurant(
    content: UserRestaurantParams
  ): Promise<UserRestaurant> {
    return await UserRestaurant.create(content);
  }

  async getUserRestaurant(
    query: UserRestaurantParams
  ): Promise<UserRestaurant[]> {
    let where = {};

    if (query) {
      const { restaurantId, userId } = query;

      if (restaurantId) {
        where = { restaurantId };
      }

      if (userId) {
        where = { [Op.or]: [{ ...where }, { userId }] };
      }
    }

    return await UserRestaurant.findAll({ where });
  }

  async getUserRestaurantByIds(
    restaurantId: string,
    userId: string
  ): Promise<UserRestaurant> {
    return await UserRestaurant.findOne({ where: { restaurantId, userId } });
  }
}
