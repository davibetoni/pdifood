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
  const { services } = context;

  if (id) {
    return await services.getRestaurantByIdService.execute(id);
  }
  return await services.getRestaurantsService.execute(query);
}
