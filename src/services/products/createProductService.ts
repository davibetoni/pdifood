import { GraphQLError } from "graphql";
import { Role } from "../../helpers/role";
import {
  ProductAttributes,
  ProductRepository,
} from "../../repositories/ProductRepository";
import { UserRestaurantRepository } from "../../repositories/UserRestaurantRepository";
import { IUserAttributes } from "../../types/IUserAttributes";

export class CreateProductService {
  constructor(
    private productRepository: ProductRepository,
    private userRestaurantRepository: UserRestaurantRepository
  ) {}

  async execute(content: ProductAttributes, manager: IUserAttributes) {
    const { restaurantId, name } = content;
    const { id: userId, role: userRole } = manager;

    const userRestaurant = this.userRestaurantRepository.getUserRestaurantByIds(
      restaurantId,
      userId
    );

    if (userRole === Role.Manager && !userRestaurant) {
      throw new GraphQLError(
        `${manager.name}, you aren't authorized to create products on this restaurant.`
      );
    }

    const product = await this.productRepository.getProductByNameByRestaurant(
      name,
      restaurantId
    );

    if (product) {
      throw new GraphQLError(
        "Already exist a product with this name on this restaurant."
      );
    }

    try {
      return await this.productRepository.createProduct(content);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
