import { createRestaurantResolver } from "./createRestaurantResolver";
import { getRestaurantsResolver } from "./getRestaurantsResolver";

export const resolvers = {
  Query: {
    restaurants: getRestaurantsResolver,
  },
  Mutation: {
    createRestaurant: createRestaurantResolver,
  },
};
