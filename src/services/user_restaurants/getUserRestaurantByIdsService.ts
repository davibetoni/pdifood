import { GraphQLError } from "graphql";
import { UserRestaurant } from "../../entities/UserRestaurant";

export async function getUserRestaurantByIdService(
  restaurantId: string,
  userId: string
): Promise<UserRestaurant> {
  try {
    const userRestaurant = UserRestaurant.findOne({
      where: { restaurantId, userId },
    });

    return await userRestaurant;
  } catch (error) {
    throw new GraphQLError(error);
  }
}
