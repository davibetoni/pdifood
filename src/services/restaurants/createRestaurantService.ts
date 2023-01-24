import { GraphQLError } from "graphql";
import { Restaurant } from "../../entities/Restaurant";
import { cnpjToNumber } from "../../helpers/cpf-cnpj";
import {
  RestaurantAttributes,
  RestaurantRepository,
} from "../../repositories/RestaurantRepository";

export class CreateRestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async execute(content: RestaurantAttributes) {
    const { name, cnpj } = content;

    const validCnpj = cnpjToNumber(cnpj);

    const restaurant =
      await this.restaurantRepository.getRestaurantByNameOrCnpj(
        name,
        validCnpj
      );

    if (restaurant) {
      throw new GraphQLError("CNPJ or Fantasy Name is already in use.");
    }

    try {
      return await this.restaurantRepository.createRestaurant({
        name,
        cnpj: validCnpj,
      });
    } catch (err) {
      throw new GraphQLError(err);
    }
  }
}
