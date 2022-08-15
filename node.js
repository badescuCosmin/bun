const http = require("http");

// Localhost
const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("Hello world from node");
  res.end();
});

server.listen(port, hostname, () => {});
