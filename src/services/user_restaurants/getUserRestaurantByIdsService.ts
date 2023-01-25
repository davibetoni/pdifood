import { GraphQLError } from "graphql";
import { UserRestaurantRepository } from "../../repositories/UserRestaurantRepository";

export class GetUserRestaurantByIdService {
  constructor(private userRestaurantRepository: UserRestaurantRepository) {}

  async execute(restaurantId: string, userId: string) {
    try {
      return await this.userRestaurantRepository.getUserRestaurantByIds(
        restaurantId,
        userId
      );
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
