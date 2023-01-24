import { CreateRestaurantService } from "../services/restaurants/createRestaurantService";
import { GetRestaurantByIdService } from "../services/restaurants/getRestaurantByIdService";
import { GetRestaurantsService } from "../services/restaurants/getRestaurantsService";

export interface IServices {
  getRestaurantsService: GetRestaurantsService;
  getRestaurantByIdService: GetRestaurantByIdService;
  createRestaurantService: CreateRestaurantService;
}
