import { GraphQLError } from "graphql";
import { IUser } from "../../entities/IUser";
import { createRestaurantService } from "../../services/restaurants/createRestaurantService";

interface RestaurantContent {
  content: { name: string; cnpj: string };
}

export async function createRestaurantResolver(
  _,
  args: RestaurantContent,
  context: IUser
) {
  const { content } = args;
  const { userAttributes } = context;

  if (userAttributes.role !== "admin") {
    throw new GraphQLError(
      `${userAttributes.name}, you aren't authorized to create restaurants.`
    );
  }

  return await createRestaurantService(content);
}
