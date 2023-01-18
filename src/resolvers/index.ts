import { createProductResolver } from "./createProductResolver";
import { createRestaurantResolver } from "./createRestaurantResolver";
import { getProductResolver } from "./getProductsResolver";
import { getRestaurantsResolver } from "./getRestaurantsResolver";

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
