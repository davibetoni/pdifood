import { Restaurant } from "../../entities/restaurant";

export async function createRestaurantService(name: string) {
  const restaurant = Restaurant.build({ name: name });
  return await restaurant.save()
}
