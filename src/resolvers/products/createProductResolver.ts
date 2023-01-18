import { Json } from "sequelize/types/utils";
import { createProductService } from "../../services/products/createProductService";

interface ProductContent {
  content: {
    restaurantId: string;
    name: string;
    price: number;
    ingredients: Json;
    imageUrl: string;
  };
}

export async function createProductResolver(_, args: ProductContent) {
  const { content } = args;

  return await createProductService(content);
}
