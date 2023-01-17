import { createRestaurantService } from "../services/restaurants/createRestaurantService";

interface RestaurantContent {
  content: { name: string; cnpj: string };
}

export async function createRestaurantResolver(_, args: RestaurantContent) {
  const { content } = args
  return await createRestaurantService(content);
}
