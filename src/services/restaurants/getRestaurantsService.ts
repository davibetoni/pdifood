import { GraphQLError } from "graphql";
import { RestaurantRepository } from "../../repositories/RestaurantRepository";

export class GetRestaurantsService {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async execute(query: string) {
    try {
      return await this.restaurantRepository.getRestaurants(query);
    } catch (err) {
      throw new GraphQLError(err);
    }
  }
}
