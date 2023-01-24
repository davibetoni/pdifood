import { Restaurant } from "../entities/Restaurant";

export interface RestaurantAttributes {
  name: string;
  cnpj: string;
}

export interface RestaurantRepository {
  getRestaurantById(id: string): Promise<Restaurant>;
  getRestaurants(query: string): Promise<Restaurant[]>;
  getRestaurantByNameOrCnpj(name: string, cpnj: string): Promise<Restaurant>;
  createRestaurant(params: RestaurantAttributes): Promise<Restaurant>;
}
