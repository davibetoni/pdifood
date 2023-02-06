import { GraphQLError } from "graphql";
import { Role } from "../../helpers/role";
import { CreateRestaurantService } from "../../services/restaurants/createRestaurantService";
import { IContext } from "../../types/IContext";

export interface RestaurantContent {
  content: { name: string; cnpj: string };
}

export class CreateRestaurantResolver {
  constructor(private createRestaurantService: CreateRestaurantService) {}

  async handle(_, args: RestaurantContent, context: IContext) {
    const { content } = args;
    const { userAttributes } = context;

    if (userAttributes.role !== Role.Admin) {
      throw new GraphQLError(
        `${userAttributes.name}, you aren't authorized to create restaurants.`
      );
    }

    return await this.createRestaurantService.execute(content);
  }
}
