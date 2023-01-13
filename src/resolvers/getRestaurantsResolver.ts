import { GetRestaurantByIdService } from "../services/restaurants/getRestaurantByIdService"
import { GetRestaurantsService } from "../services/restaurants/getRestaurantsService"

export async function getRestaurantsResolver(_, args) {
  const { id } = args

  if(id){
    return await GetRestaurantByIdService(id)
  }
  return await GetRestaurantsService()
}
