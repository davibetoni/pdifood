import { ProductSequelize } from "../../repositories/implementation/ProductSequelize";
import { UserRestaurantSequelize } from "../../repositories/implementation/UserRestaurantSequelize";
import { CreateProductService } from "../../services/products/createProductService";
import { GetProductsService } from "../../services/products/getProductsService";
import { IContext } from "../../types/IContext";
import { CreateProductResolver, ProductContent } from "./CreateProductResolver";
import { GetProductResolver, GetProductsParams } from "./GetProductsResolver";

export async function createProductResolver(
  _,
  args: ProductContent,
  context: IContext
) {
  const productRepository = new ProductSequelize();
  const userRestaurantRepository = new UserRestaurantSequelize();
  const createProductService = new CreateProductService(
    productRepository,
    userRestaurantRepository
  );
  const createProductResolver = new CreateProductResolver(createProductService);

  return await createProductResolver.handle(_, args, context);
}

export async function getProductResolver(_, args: GetProductsParams) {
  const productRepository = new ProductSequelize();
  const getProductsService = new GetProductsService(productRepository);
  const getProductResoler = new GetProductResolver(getProductsService);

  return await getProductResoler.handle(_, args);
}
