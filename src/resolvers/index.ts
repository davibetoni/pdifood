import { createProductResolver } from "./products/createProductResolver";
import { createRestaurantResolver } from "./restaurants/createRestaurantResolver";
import { getProductResolver } from "./products/getProductsResolver";
import { getRestaurantsResolver } from "./restaurants/getRestaurantsResolver";

export const resolvers = {
  Query: {
    restaurants: getRestaurantsResolver,
    products: getProductResolver,
  },
  Mutation: {
    createRestaurant: createRestaurantResolver,
    createProduct: createProductResolver,
  },
};
