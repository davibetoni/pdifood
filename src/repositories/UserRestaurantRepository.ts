import { UserRestaurant } from "../entities/UserRestaurant";

export interface UserRestaurantRepository {
  getUserRestaurantByIds(
    restaurantId: string,
    userId: string
  ): Promise<UserRestaurant>;
}
