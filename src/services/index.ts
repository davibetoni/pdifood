import { ProductSequelize } from "../repositories/implementation/ProductSequelize";
import { RestaurantSequelize } from "../repositories/implementation/RestaurantSequelize";
import { UserRestaurantSequelize } from "../repositories/implementation/UserRestaurantSequelize";
import { CreateProductService } from "./products/createProductService";
import { GetProductsService } from "./products/getProductsService";
import { CreateRestaurantService } from "./restaurants/createRestaurantService";
import { GetRestaurantByIdService } from "./restaurants/getRestaurantByIdService";
import { GetRestaurantsService } from "./restaurants/getRestaurantsService";
import { GetUserRestaurantByIdService } from "./user_restaurants/getUserRestaurantByIdsService";

export function createServices() {
  // ---
  // . Repositories -------------------
  // ---
  const restaurantRepository = new RestaurantSequelize();
  const productRepository = new ProductSequelize();
  const userRestaurantRepository = new UserRestaurantSequelize();

  // ---
  // . Services -----------------------
  // .. Restaurants -------------------
  const getRestaurantsService = new GetRestaurantsService(restaurantRepository);
  const getRestaurantByIdService = new GetRestaurantByIdService(
    restaurantRepository
  );
  const createRestaurantService = new CreateRestaurantService(
    restaurantRepository
  );
  // .. Products ---------------------
  const getProductsService = new GetProductsService(productRepository);
  const createProductService = new CreateProductService(
    productRepository,
    userRestaurantRepository
  );
  // .. UserRestaurant ---------------
  const getUserRestaurantByIdsService = new GetUserRestaurantByIdService(
    userRestaurantRepository
  );

  return {
    getRestaurantsService,
    getRestaurantByIdService,
    createRestaurantService,
    getProductsService,
    createProductService,
    getUserRestaurantByIdsService,
  };
}
