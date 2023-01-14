import { createRestaurantService } from "../services/restaurants/createRestaurantService"

interface RestaurantAttributes {
  name: string
}

export async function createRestaurantResolver(_, args: RestaurantAttributes) {
  const { name } = args
  return await createRestaurantService(name)
}