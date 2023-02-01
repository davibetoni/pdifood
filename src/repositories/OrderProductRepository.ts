import { Json } from "sequelize/types/utils";
import { OrderProduct } from "../entities/OrderProduct";

export interface OrderProductsAttributes {
  orderId: string;
  productId: string;
  quantity: number;
  newIngredients: Json;
}

export interface OrderProductsParams {
  orderId: string;
  productId: string;
}

export interface OrderProductRepository {
  createOrderProduct(params: OrderProductsAttributes): Promise<OrderProduct>;
  getOrderProductByIds(
    orderId: string,
    productId: string
  ): Promise<OrderProduct>;
  getOrderProducts(query: OrderProductsParams): Promise<OrderProduct[]>;
  updateOrderProductQuantity(
    orderProduct: OrderProduct,
    newQuantity: number
  ): Promise<OrderProduct>;
}
