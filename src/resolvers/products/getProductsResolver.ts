import { GetProductsService } from "../../services/products/getProductsService";
import { IContext } from "../../types/IContext";

enum OrderProduct {
  moreThan,
  lessThan,
  asc,
  desc,
}

interface QueryParams {
  name: string;
  price: number;
  restaurantId: string;
  order: OrderProduct;
}

interface GetProductsParams {
  id: string;
  query: QueryParams;
}

export async function getProductResolver(
  _,
  args: GetProductsParams,
  context: IContext
) {
  const { id, query } = args;
  const { productRepository } = context.repositories;
  const { name, order, price, restaurantId } = query;
  const getProductsService = new GetProductsService(productRepository);

  return await getProductsService.execute({
    name,
    price,
    orderBy: order?.toString(),
    restaurantId,
  });
}
