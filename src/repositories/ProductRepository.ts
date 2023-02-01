import { Json } from "sequelize/types/utils";
import { Product } from "../entities/Product";

export interface ProductsParams {
  name: string;
  orderBy: string;
  restaurantId: string;
  price: number;
}

export interface ProductAttributes {
  restaurantId: string;
  name: string;
  price: number;
  ingredients: Json;
  imageUrl: string;
}

export interface ProductRepository {
  getProducts(query: ProductsParams): Promise<Product[]>;
  getProductById(id: string): Promise<Product>;
  getProductByNameByRestaurant(
    name: string,
    restaurantId: string
  ): Promise<Product>;
  createProduct(params: ProductAttributes): Promise<Product>;
}
