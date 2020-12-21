const ganache = require("ganache-cli");
const port = process.env.PORT || 5000;
const total_accounts = 4;
const network_id = 6969;
const server = ganache.server({
  network_id,
  port,
  total_accounts,
});

server.listen(port, function (err, blockchain) {
  if (err) console.log(err);
  else console.log(blockchain);
});

// const express = require('express')
// const ganache = require("ganache-core");
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
