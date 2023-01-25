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
  const { services } = context;
  const { name, order, price, restaurantId } = query;

  return await services.getProductsService.execute({
    name,
    price,
    orderBy: order?.toString(),
    restaurantId,
  });
}
