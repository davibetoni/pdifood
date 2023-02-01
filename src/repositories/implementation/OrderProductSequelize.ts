import { OrderProduct } from "../../entities/OrderProduct";
import {
  OrderProductRepository,
  OrderProductsAttributes,
  OrderProductsParams,
} from "../OrderProductRepository";

export class OrderProductSequelize implements OrderProductRepository {
  async updateOrderProductQuantity(
    orderProduct: OrderProduct,
    newQuantity: number
  ): Promise<OrderProduct> {
    const oldQuantity = +orderProduct.dataValues.quantity;

    return await orderProduct.update({ quantity: oldQuantity + newQuantity });
  }

  async createOrderProduct(
    params: OrderProductsAttributes
  ): Promise<OrderProduct> {
    return await OrderProduct.create(params);
  }

  async getOrderProductByIds(
    orderId: string,
    productId: string
  ): Promise<OrderProduct> {
    return await OrderProduct.findOne({ where: { orderId, productId } });
  }

  async getOrderProducts(query: OrderProductsParams): Promise<OrderProduct[]> {
    const { orderId, productId } = query;
    let where = {};

    if (orderId) {
      where = { orderId };
    }

    if (productId) {
      where = { orderId };
    }
    return await OrderProduct.findAll({ where });
  }
}
