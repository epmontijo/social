declare module "bun" {
  interface Env {
    readonly NODE_ENV: "development" | "production";
    readonly PORT: number | 3000;
    readonly DATABASE_URL: string;
    readonly COOKIE_SECRET: string;
    readonly JWT_SECRET: string;
  }
}
