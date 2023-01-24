import { IUserAttributes } from "../types/IUserAttributes";
import { Auth } from "./entities/Auth";

export async function authMiddleware(req, res) {
  const token = req.headers.token;
  const auth = new Auth(token);

  const { userAttributes } = await auth.authenticatedUser();

  return userAttributes;
}
