import { GraphQLError } from "graphql";
import { Json } from "sequelize/types/utils";
import { IUser } from "../../entities/IUser";
import { createProductService } from "../../services/products/createProductService";

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
  context: IUser
) {
  const { content } = args;
  const { userAttributes } = context;

  if (userAttributes.role === "customer") {
    throw new GraphQLError(
      `${userAttributes.name}, you aren't authorized to create products.`
    );
  }

  return await createProductService(content, { userAttributes });
}
