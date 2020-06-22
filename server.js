const http = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = +process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || 'localhost';

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(port, hostname, err => {
      if (err) throw err;
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
