const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  const currentUrl = request.url;

  switch (currentUrl) {
    case "/":
      response.write("Welcome to the Home Page!");
      response.end();
      break;

    case "/about":
      response.write("This is the About Page.");
      response.end();
      break;

    case "/todo":
      response.write("This is the Todo Page.");
      response.end();
      break;

    default:
      response.writeHead(404);
      response.write("404 Not Found");
      response.end();
      break;
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
})
