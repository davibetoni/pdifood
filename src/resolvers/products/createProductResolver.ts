import { GraphQLError } from "graphql";
import { Json } from "sequelize/types/utils";
import { IContext } from "../../types/IContext";

interface ProductContent {
  content: {
    restaurantId: string;
    name: string;
    price: number;
    ingredients: Json;
    imageUrl: string;
  };
}

export async function createProductResolver(
  _,
  args: ProductContent,
  context: IContext
) {
  const { content } = args;
  const { services, userAttributes } = context;

  if (userAttributes.role === "customer") {
    throw new GraphQLError(
      `${userAttributes.name}, you aren't authorized to create products.`
    );
  }

  return await services.createProductService.execute(content, userAttributes);
}
