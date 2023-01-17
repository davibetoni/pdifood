import { createRestaurantResolver } from "./createRestaurantResolver";
import { getProductResolver } from "./getProductResolver";
import { getRestaurantsResolver } from "./getRestaurantsResolver";

export const resolvers = {
  Query: {
    restaurants: getRestaurantsResolver,
    products: getProductResolver,
  },
  Mutation: {
    createRestaurant: createRestaurantResolver,
  },
};
