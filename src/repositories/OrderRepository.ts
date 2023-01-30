import { Order } from "../entities/Order";

export interface OrderContent {
  userId: string;
}

export interface OrderParams {
  finishedAt: Date;
}

export interface OrderRepository{
  createOrder(content: OrderContent): Promise<Order>
  finishOrder(order: Order, finishedBy: string): Promise<Order>
  getOrderById(id: string): Promise<Order>
  getOrders(query: OrderParams): Promise<Order[]>
}