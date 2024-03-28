const http = require('http');
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const proxy = http.createServer(function (req, res) {
    if(req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        html = fs.readFileSync("./pages/index.html");
        res.end(html);
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        html = fs.readFileSync("./pages/about.html");
        res.end(html);
      } else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        html = fs.readFileSync("./pages/contact.html");
        res.end(html);
      } else if (req.url === "/style.css") {
        // serve css file
        res.writeHead(200, { "Content-Type": "text/css" });
        css = fs.readFileSync("./styles/style.css");
        res.end(css);
      } else {
        // page not found
        res.writeHead(200, { "Content-Type": "text/html" });
        html = fs.readFileSync("./pages/404.html");
        res.end(html);
      }
})

proxy.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`)
})
