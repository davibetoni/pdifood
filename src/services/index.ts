import { OrderSequelize } from "../repositories/implementation/OrderSequelize";
import { ProductSequelize } from "../repositories/implementation/ProductSequelize";
import { RestaurantSequelize } from "../repositories/implementation/RestaurantSequelize";
import { UserRestaurantSequelize } from "../repositories/implementation/UserRestaurantSequelize";
import { CreateOrderService } from "./orders/createOrderService";
import { FinishOrderService } from "./orders/finishOrderService";
import { GetOrderByIdService } from "./orders/getOrderById";
import { GetOrdersService } from "./orders/getOrdersService";
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
  const orderRepository = new OrderSequelize();

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
  // .. Orders -----------------------
  const createOrderService = new CreateOrderService(orderRepository);
  const finishOrderService = new FinishOrderService(orderRepository);
  const getOrderByIdService = new GetOrderByIdService(orderRepository);
  const getOrdersService = new GetOrdersService(orderRepository);

  return {
    getRestaurantsService,
    getRestaurantByIdService,
    createRestaurantService,
    getProductsService,
    createProductService,
    getUserRestaurantByIdsService,
    createOrderService,
    finishOrderService,
    getOrderByIdService,
    getOrdersService,
  };
}
