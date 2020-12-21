const ganache = require("ganache-cli");
const server = ganache.server();
const port = 8545;
server.listen(port, function (err, blockchain) {
  if (err) console.log(err);
  else console.log(blockchain);
});
