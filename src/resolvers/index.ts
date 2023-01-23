import { createProductResolver } from "./products/createProductResolver";
import { createRestaurantResolver } from "./restaurants/createRestaurantResolver";
import { getProductResolver } from "./products/getProductsResolver";
import { getRestaurantsResolver } from "./restaurants/getRestaurantsResolver";
import { createOrderResolver } from "./orders/createOrderResolver";
import { getOrdersResolver } from "./orders/getOrdersResolver";
import { finishOrderResolver } from "./orders/finishOrderResolver";

export const resolvers = {
  Query: {
    restaurants: getRestaurantsResolver,
    products: getProductResolver,
    orders: getOrdersResolver,
  },
  Mutation: {
    createRestaurant: createRestaurantResolver,
    createProduct: createProductResolver,
    createOrder: createOrderResolver,
    finishOrder: finishOrderResolver,
  },
};
