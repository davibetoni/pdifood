import { GetRestaurantsService } from "../services/restaurants/getRestaurantsService"

export async function getRestaurantsResolver() {
  return await GetRestaurantsService()
}
