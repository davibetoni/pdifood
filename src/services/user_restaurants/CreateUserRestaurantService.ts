import { GraphQLError } from "graphql";
import {
  UserRestaurantParams,
  UserRestaurantRepository,
} from "../../repositories/UserRestaurantRepository";

export class CreateUserRestaurantService {
  constructor(private userRestaurantRepository: UserRestaurantRepository) {}

  async execute(content: UserRestaurantParams) {
    try {
      return await this.userRestaurantRepository.createUserRestaurant(content);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
