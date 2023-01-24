import { GraphQLError } from "graphql";
import { RestaurantRepository } from "../../repositories/RestaurantRepository";

export class GetRestaurantByIdService {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async execute(id: string) {
    try {
      const restaurant = await this.restaurantRepository.getRestaurantById(id);
      return [restaurant];
    } catch (err) {
      throw new GraphQLError(err);
    }
  }
}
