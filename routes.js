const path = require('path');
const sendResponse = require('./utils/sendResponse');

const routes = (req, res) => {
  switch (req.url) {
    case '/':
    case '/home':
      console.log(' 200 OK - /home');
      sendResponse(res, path.join(__dirname, 'public', 'pages', 'home.html'), 200);
      break;
    case '/about':
      console.log(' 200 OK - /about');
      sendResponse(res, path.join(__dirname, 'public', 'pages', 'about.html'), 200);
      break;
    case '/contact':
      console.log(' 200 OK - /contact');
      sendResponse(res, path.join(__dirname, 'public', 'pages', 'contact.html'), 200);
      break;
    default:
      console.log(` 404 Not Found - ${req.url}`);
      sendResponse(res, path.join(__dirname, 'public', 'pages', '404.html'), 404);
      break;
  }
};

module.exports = routes;
