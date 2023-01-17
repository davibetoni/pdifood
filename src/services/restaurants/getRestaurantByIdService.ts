import { GraphQLError } from "graphql";
import { Restaurant } from "../../entities/restaurant";

export async function getRestaurantByIdService(id: string) {
  const restaurant = await Restaurant.findByPk(id);

  return restaurant ? [restaurant] : []
}
