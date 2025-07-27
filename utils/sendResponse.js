
const fs = require('fs');

function sendResponse(res, filePath, statusCode) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Internal Server Error');
    }
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

module.exports = sendResponse;
