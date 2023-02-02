import { GetRestaurantByIdService } from "../../services/restaurants/getRestaurantByIdService";
import { GetRestaurantsService } from "../../services/restaurants/getRestaurantsService";
import { IContext } from "../../types/IContext";

interface getRestaurantsArgs {
  id: string;
  query: string;
}

export async function getRestaurantsResolver(
  _,
  args: getRestaurantsArgs,
  context: IContext
) {
  const { id, query } = args;
  const { restaurantRepository } = context.repositories;
  const getRestaurantByIdService = new GetRestaurantByIdService(
    restaurantRepository
  );
  const getRestaurantsService = new GetRestaurantsService(restaurantRepository);

  if (id) {
    return await getRestaurantByIdService.execute(id);
  }
  return await getRestaurantsService.execute(query);
}
