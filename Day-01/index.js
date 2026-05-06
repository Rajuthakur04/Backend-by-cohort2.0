//  console.log ("hello Backend world ");

//  let name = "Raju";

//  function greet(user){
//     return `hello, ${user}`;
//  }
//  console.log(greet(name));


const http = require("http");

const server = http.createServer((req, res) => {
  res.end("My first server is running successfully!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});