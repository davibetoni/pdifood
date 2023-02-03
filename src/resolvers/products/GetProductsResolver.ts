import { GetProductsService } from "../../services/products/getProductsService";

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

export interface GetProductsParams {
  id: string;
  query: QueryParams;
}

export class GetProductResolver {
  constructor(private getProductsService: GetProductsService) {}

  async handle(_, args: GetProductsParams) {
    const { id, query } = args;
    const { name, order, price, restaurantId } = query;

    return await this.getProductsService.execute({
      name,
      price,
      orderBy: order?.toString(),
      restaurantId,
    });
  }
}
