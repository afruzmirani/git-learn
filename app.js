const Load = require("./public/main");
const logger = new Load();
console.log(typeof logger);
console.log("Learning Fork By AfruzMirani");
console.log("i want to ...");

const http = require("http");
const server = http.createServer((req, res) => {});
server.listen(3000, () => {});
