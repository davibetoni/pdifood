import { getProductsService } from "../services/products/getProductsService";

enum OrderProduct {
  moreThan,
  lessThan,
  asc,
  desc,
}

interface QueryParams {
  name: string;
  price: number;
  order: OrderProduct;
}

interface GetProductsParams {
  id: string;
  query: QueryParams;
}

export async function getProductResolver(_, args: GetProductsParams) {
  const { id, query } = args;
  const { name, order, price } = query;

  return await getProductsService({ name, price, orderBy: order.toString() });
}
