import { IUser } from "../entities/IUser";
import { Auth } from "./entities/Auth";

export async function authMiddleware(req, res): Promise<IUser> {
  const token = req.headers.token;
  const auth = new Auth(token);

  return await auth.authenticatedUser();
}
