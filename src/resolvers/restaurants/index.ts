import { RestaurantSequelize } from "../../repositories/implementation/RestaurantSequelize";
import { CreateRestaurantService } from "../../services/restaurants/createRestaurantService";
import { GetRestaurantByIdService } from "../../services/restaurants/getRestaurantByIdService";
import { GetRestaurantsService } from "../../services/restaurants/getRestaurantsService";
import { IContext } from "../../types/IContext";
import {
  CreateRestaurantResolver,
  RestaurantContent,
} from "./CreateRestaurantResolver";
import {
  getRestaurantsQuery,
  GetRestaurantsResolver,
} from "./GetRestaurantsResolver";

export async function createRestaurantResolver(
  _,
  args: RestaurantContent,
  context: IContext
) {
  const restaurantRepository = new RestaurantSequelize();
  const createRestaurantService = new CreateRestaurantService(
    restaurantRepository
  );
  const createRestaurantResolver = new CreateRestaurantResolver(
    createRestaurantService
  );

  return await createRestaurantResolver.handle(_, args, context);
}

export async function getRestaurantsResolver(_, args: getRestaurantsQuery) {
  const restaurantRepository = new RestaurantSequelize();
  const getRestaurantByIdService = new GetRestaurantByIdService(
    restaurantRepository
  );
  const getRestaurantsService = new GetRestaurantsService(restaurantRepository);
  const getRestaurantsResolver = new GetRestaurantsResolver(
    getRestaurantByIdService,
    getRestaurantsService
  );

  return await getRestaurantsResolver.handle(_, args);
}
