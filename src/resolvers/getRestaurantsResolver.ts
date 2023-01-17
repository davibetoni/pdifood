import { getRestaurantByIdService } from "../services/restaurants/getRestaurantByIdService";
import { getRestaurantsService } from "../services/restaurants/getRestaurantsService";

interface getRestaurantsArgs {
  id: string;
  query: string;
}

export async function getRestaurantsResolver(_, args: getRestaurantsArgs) {
  const { id, query } = args;

  if (id) {
    return await getRestaurantByIdService(id);
  }
  return await getRestaurantsService(query);
}
