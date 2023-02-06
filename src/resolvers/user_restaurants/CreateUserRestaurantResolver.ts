import { GraphQLError } from "graphql";
import { Role } from "../../helpers/role";
import { CreateUserRestaurantService } from "../../services/user_restaurants/CreateUserRestaurantService";
import { IContext } from "../../types/IContext";

export interface UserRestaurantInput {
  content: {
    userId: string;
    restaurantId: string;
  };
}

export class CreateUserRestaurantResolver {
  constructor(
    private createUserRestaurantService: CreateUserRestaurantService
  ) {}

  async handle(_, args: UserRestaurantInput, context: IContext) {
    const { content } = args;
    const { role } = context.userAttributes;

    if (role != Role.Admin) {
      throw new GraphQLError("You cant associate a user to a restaurant");
    }

    return await this.createUserRestaurantService.execute(content);
  }
}
