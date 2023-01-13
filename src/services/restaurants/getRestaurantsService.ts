import { Restaurant } from "../../entities/restaurant";

export async function GetRestaurantsService() {
  return await Restaurant.findAll()
}