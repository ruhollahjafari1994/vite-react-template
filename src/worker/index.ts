import { Hono } from "hono";
import type { Context } from "hono";

const app = new Hono();

app.get("/api/", (c: Context) => {
  return c.json({
    name: "Roohollah Jafari",
  });
});

export default app;