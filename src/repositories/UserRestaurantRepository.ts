import { UserRestaurant } from "../entities/UserRestaurant";

export interface UserRestaurantParams {
  userId: string;
  restaurantId: string;
}

export interface UserRestaurantRepository {
  getUserRestaurantByIds(
    restaurantId: string,
    userId: string
  ): Promise<UserRestaurant>;
  createUserRestaurant(content: UserRestaurantParams): Promise<UserRestaurant>;
  getUserRestaurant(query: UserRestaurantParams): Promise<UserRestaurant[]>;
}
