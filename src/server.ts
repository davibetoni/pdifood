import fs from "node:fs";
import path from "node:path";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers";
import "./database";
import { authMiddleware } from "./middleware/authMiddleware";

const typeDefs = fs.readFileSync(
  path.resolve(__dirname, "graphql/schema.gql"),
  "utf-8"
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function setup() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => {
      return await authMiddleware(req, res);
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

setup();
