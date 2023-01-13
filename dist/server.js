"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const resolvers_1 = require("./resolvers");
require("./database");
const typeDefs = node_fs_1.default.readFileSync(node_path_1.default.resolve(__dirname, "graphql/schema.gql"), "utf-8");
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers: resolvers_1.resolvers,
});
async function setup() {
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
}
setup();
