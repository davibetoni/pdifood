import { RESTDataSource } from "@apollo/datasource-rest";
import { GraphQLError } from "graphql";
import { UrlWithStringQuery } from "url";

export interface IAuth {
  userAttributes: {
    id: string;
    role: string;
    name: string;
  };
}

export class Auth extends RESTDataSource {
  override baseURL = process.env.AUTH_URL;

  constructor(private token: UrlWithStringQuery) {
    super();
  }

  async authenticatedUser(): Promise<IAuth> {
    try {
      return await this.post("/auth", { body: { token: this.token } });
    } catch (error) {
      throw new GraphQLError(
        "Unauthenticated: " + error.extensions?.response?.body?.message,
        {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        }
      );
    }
  }
}
