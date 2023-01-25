import { GraphQLError } from "graphql";
import {
  ProductRepository,
  ProductsParams,
} from "../../repositories/ProductRepository";

export class GetProductsService {
  constructor(private productRepository: ProductRepository) {}

  async execute(query: ProductsParams) {
    try {
      return await this.productRepository.getProducts(query);
    } catch (error) {
      throw new GraphQLError(error);
    }
  }
}
