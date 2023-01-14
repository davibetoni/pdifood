import { GetRestaurantByIdService } from "../services/restaurants/getRestaurantByIdService"
import { GetRestaurantsService } from "../services/restaurants/getRestaurantsService"

interface getRestaurantsArgs{
  id: string
  name: string
}

export async function getRestaurantsResolver(_, args: getRestaurantsArgs) {
  const { id, name } = args

  if(id){
    return await GetRestaurantByIdService(id)
  }
  return await GetRestaurantsService()
}
