const port = 3080;
export default {
  port,
  fetch() {
    return new Response("Hello world from bun ts");
  },
};
