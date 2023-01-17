import { GetRestaurantByIdService } from "../services/restaurants/getRestaurantByIdService";
import { getRestaurantsService } from "../services/restaurants/getRestaurantsService";

interface getRestaurantsArgs {
  id: string;
  query: string;
}

export async function getRestaurantsResolver(_, args: getRestaurantsArgs) {
  const { id, query } = args;

  if (id) {
    return await GetRestaurantByIdService(id);
  }
  return await getRestaurantsService(query);
}
