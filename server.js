// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const routes = require('./routes');
const sendResponse = require('./utils/sendResponse');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);

  if (req.url.startsWith('/css/')) {
    const filePath = path.join(__dirname, 'public', req.url);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end('CSS Not Found');
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } else {
    routes(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
