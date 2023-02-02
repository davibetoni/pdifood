import { GraphQLError } from "graphql";
import { Json } from "sequelize/types/utils";
import { CreateProductService } from "../../services/products/createProductService";
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
  const { repositories, userAttributes } = context;
  const createProductService = new CreateProductService(
    repositories.productRepository,
    repositories.userRestaurantRepository
  );

  if (userAttributes.role === "customer") {
    throw new GraphQLError(
      `${userAttributes.name}, you aren't authorized to create products.`
    );
  }

  return await createProductService.execute(content, userAttributes);
}
