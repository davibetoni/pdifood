import { GraphQLError } from "graphql";
import { Product } from "../../entities/product";
import { Restaurant } from "../../entities/restaurant";

export async function getRestaurantByIdService(id: string) {
  const restaurant = await Restaurant.findByPk(id, {
    include: {
      model: Product,
      as: "products",
    },
  });

  return restaurant ? [restaurant] : [];
}
