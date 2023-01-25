import { UserRestaurant } from "../../entities/UserRestaurant";
import { UserRestaurantRepository } from "../UserRestaurantRepository";

export class UserRestaurantSequelize implements UserRestaurantRepository {
  async getUserRestaurantByIds(
    restaurantId: string,
    userId: string
  ): Promise<UserRestaurant> {
    return await UserRestaurant.findOne({ where: { restaurantId, userId } });
  }
}
