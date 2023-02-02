import { GraphQLError } from "graphql";
import { CreateRestaurantService } from "../../services/restaurants/createRestaurantService";
import { IContext } from "../../types/IContext";

interface RestaurantContent {
  content: { name: string; cnpj: string };
}

export async function createRestaurantResolver(
  _,
  args: RestaurantContent,
  context: IContext
) {
  const { content } = args;
  const { repositories, userAttributes } = context;
  const createRestaurantService = new CreateRestaurantService(
    repositories.restaurantRepository
  );

  if (userAttributes.role !== "admin") {
    throw new GraphQLError(
      `${userAttributes.name}, you aren't authorized to create restaurants.`
    );
  }

  return await createRestaurantService.execute(content);
}
