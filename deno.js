import { serve } from "https://deno.land/std@0.152.0/http/server.ts";
const port = 8080;
const handler = () => {
  const body = "Hello world from deno";

  return new Response(body, { status: 200 });
};

await serve(handler, { port });
