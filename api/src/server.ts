import fastify, { type FastifyInstance } from "fastify";

export const app: FastifyInstance = fastify({
  logger: process.env.NODE_ENV === "development",
});

app.register(import("@fastify/cors"));
app.register(import("@fastify/cookie"), {
  secret: process.env.COOKIE_SECRET,
});

app.register(import("./router"));
