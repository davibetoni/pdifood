import { getRestaurantsResolver } from "./getRestaurantsResolver";

export const resolvers = {
  Query: {
    restaurants: getRestaurantsResolver,
  },
};