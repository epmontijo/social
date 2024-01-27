FROM oven/bun:1 as base

WORKDIR /app

COPY . .
RUN bun install --frozen-lockfile --production

EXPOSE 3000
ENTRYPOINT [ "bun", "run", "index.ts" ]
