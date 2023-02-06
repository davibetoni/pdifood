import { UserRestaurantSequelize } from "../../repositories/implementation/UserRestaurantSequelize";
import { CreateUserRestaurantService } from "../../services/user_restaurants/CreateUserRestaurantService";
import { IContext } from "../../types/IContext";
import {
  CreateUserRestaurantResolver,
  UserRestaurantInput,
} from "./CreateUserRestaurantResolver";

export default async function createUserRestaurantResolver(
  _,
  args: UserRestaurantInput,
  context: IContext
) {
  const userRestaurantRepository = new UserRestaurantSequelize();
  const createUserRestaurantService = new CreateUserRestaurantService(
    userRestaurantRepository
  );
  const createUserRestaurantResolver = new CreateUserRestaurantResolver(
    createUserRestaurantService
  );

  return await createUserRestaurantResolver.handle(_, args, context);
}
