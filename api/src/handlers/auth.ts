import type { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";

import { database } from "@database";
import { users, type User } from "@database/schema/user";

interface IRequest {
  username: string;
  email: string;
  password: string;
}

export default async function (app: FastifyInstance) {
  app.route({
    url: "/signup",
    method: "POST",
    schema: {
      body: {
        type: "object",
        properties: {
          username: { type: "string" },
          email: { type: "string", format: "email" },
          password: { type: "string" },
        },
        required: ["username", "email", "password"],
      },
    },
    preHandler: async (request: FastifyRequest, response: FastifyReply) => {
      // TODO: Check if username or email are already taken
    },
    handler: async (request: FastifyRequest, response: FastifyReply) => {
      const { username, email, password } = request.body as IRequest;

      const token = jwt.sign({ username, password }, process.env.JWT_SECRET);

      const user = await database.insert(users).values({
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password: Bun.password.hashSync(password),
        token,
      } as User);

      response
        .setCookie("token", token, {
          maxAge: 5 * 30 * 24 * 60 * 60 * 1000, // 5 months
        })
        .status(200)
        .send({
          message: "ok",
        });
    },
  });
}
