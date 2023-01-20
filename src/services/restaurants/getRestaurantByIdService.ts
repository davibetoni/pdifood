import { GraphQLError } from "graphql";
import { Product } from "../../entities/Product";
import { Restaurant } from "../../entities/Restaurant";

export async function getRestaurantByIdService(id: string) {
  const restaurant = await Restaurant.findByPk(id, {
    include: {
      model: Product,
      as: "products",
    },
  });

  return restaurant ? [restaurant] : [];
}
