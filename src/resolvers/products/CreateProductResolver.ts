import { GraphQLError } from "graphql";
import { Json } from "sequelize/types/utils";
import { Role } from "../../helpers/role";
import { CreateProductService } from "../../services/products/createProductService";
import { IContext } from "../../types/IContext";

export interface ProductContent {
  content: {
    restaurantId: string;
    name: string;
    price: number;
    ingredients: Json;
    imageUrl: string;
  };
}

export class CreateProductResolver {
  constructor(private createProductService: CreateProductService) {}

  async handle(_, args: ProductContent, context: IContext) {
    const { content } = args;
    const { userAttributes } = context;

    if (userAttributes.role === Role.Customer) {
      throw new GraphQLError(
        `${userAttributes.name}, you aren't authorized to create products.`
      );
    }

    return await this.createProductService.execute(content, userAttributes);
  }
}
