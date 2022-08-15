const port = 3000;
export default {
  port,
  fetch() {
    return new Response("Hello world from bun js");
  },
};
