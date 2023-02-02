import { IRepositories } from "./IRepositories";
import { IUserAttributes } from "./IUserAttributes";

export interface IContext {
  userAttributes: IUserAttributes;
  repositories: IRepositories;
}
