import { GraphQLError } from "graphql";
import { Restaurant } from "../../entities/restaurant";

export async function GetRestaurantByIdService(id: string) {
  const restaurant = await Restaurant.findByPk(id);

  if (!restaurant) {
    throw new GraphQLError('There is no restaurant with this id.', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  return [restaurant];
}
