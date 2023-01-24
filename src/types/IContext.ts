import { GetRestaurantsService } from "../services/restaurants/getRestaurantsService";
import { IServices } from "./IServices";
import { IUserAttributes } from "./IUserAttributes";

export interface IContext {
  userAttributes: IUserAttributes;
  services: IServices;
}
