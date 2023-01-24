import { GraphQLError } from "graphql";
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
  const { services, userAttributes } = context;

  if (userAttributes.role !== "admin") {
    throw new GraphQLError(
      `${userAttributes.name}, you aren't authorized to create restaurants.`
    );
  }

  return await services.createRestaurantService.execute(content);
}
