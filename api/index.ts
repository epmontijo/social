import { app } from "~/server";

app.listen({ port: 3000 }, (error, address) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log(`🚀 Server ready at: ${address}`);
});
