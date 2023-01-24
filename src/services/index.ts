import { RestaurantSequelize } from "../repositories/implementation/RestaurantSequelize";
import { CreateRestaurantService } from "./restaurants/createRestaurantService";
import { GetRestaurantByIdService } from "./restaurants/getRestaurantByIdService";
import { GetRestaurantsService } from "./restaurants/getRestaurantsService";

export function createServices() {
  const restaurantRepository = new RestaurantSequelize();

  const getRestaurantsService = new GetRestaurantsService(restaurantRepository);
  const getRestaurantByIdService = new GetRestaurantByIdService(
    restaurantRepository
  );
  const createRestaurantService = new CreateRestaurantService(
    restaurantRepository
  );

  return {
    getRestaurantsService,
    getRestaurantByIdService,
    createRestaurantService,
  };
}
