import { GraphQLError } from "graphql";
import { Product } from "../../entities/Product";
import { Restaurant } from "../../entities/Restaurant";

export async function getRestaurantByIdService(
  id: string
): Promise<Restaurant[]> {
  try {
    const restaurant = await Restaurant.findByPk(id, {
      include: {
        model: Product,
        as: "products",
      },
    });

    return [restaurant];
  } catch (error) {
    throw new GraphQLError(error);
  }
}
