import { CreateProductService } from "../services/products/createProductService";
import { GetProductsService } from "../services/products/getProductsService";
import { CreateRestaurantService } from "../services/restaurants/createRestaurantService";
import { GetRestaurantByIdService } from "../services/restaurants/getRestaurantByIdService";
import { GetRestaurantsService } from "../services/restaurants/getRestaurantsService";
import { GetUserRestaurantByIdService } from "../services/user_restaurants/getUserRestaurantByIdsService";

export interface IServices {
  getRestaurantsService: GetRestaurantsService;
  getRestaurantByIdService: GetRestaurantByIdService;
  createRestaurantService: CreateRestaurantService;
  getProductsService: GetProductsService;
  createProductService: CreateProductService;
  getUserRestaurantByIdsService: GetUserRestaurantByIdService;
}
