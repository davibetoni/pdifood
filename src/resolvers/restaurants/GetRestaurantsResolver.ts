import { GetRestaurantByIdService } from "../../services/restaurants/getRestaurantByIdService";
import { GetRestaurantsService } from "../../services/restaurants/getRestaurantsService";

export interface getRestaurantsQuery {
  id: string;
  query: string;
}

export class GetRestaurantsResolver {
  constructor(
    private getRestaurantByIdService: GetRestaurantByIdService,
    private getRestaurantsService: GetRestaurantsService
  ) {}

  async handle(_, args: getRestaurantsQuery) {
    const { id, query } = args;

    if (id) {
      return await this.getRestaurantByIdService.execute(id);
    }
    return await this.getRestaurantsService.execute(query);
  }
}
