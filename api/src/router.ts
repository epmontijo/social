import type { FastifyInstance } from "fastify";

export default async function (app: FastifyInstance) {
  app.register(import("@handlers/auth"), { prefix: "/auth" });
}
