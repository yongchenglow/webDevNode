var server = require("http").createServer();
server.on("request", (request, response) => {
  var body = [];
  request.on("data", chunk => {
    body.push(chunk);
  });
  request
    .on("end", () => {
      let bodyString = body.concat().toString();
      response.end(bodyString);
    })
    .on("error", () => {
      response.statusCode = 400;
      response.end();
    });
  response.on("error", err => {
    console.err(err);
  });
});
server.listen(8008, () => {
  console.log("Server listening at 8008");
});
