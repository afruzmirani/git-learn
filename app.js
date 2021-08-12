const Load = require("./public/main");
const logger = new Load();
// console.log(typeof logger);

const http = require("http");
const server = http.createServer((req, res) => {});
server.listen(3000, () => {});
