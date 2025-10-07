import http from "http";

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h1>homepage</h1>");
  }
  else if(req.url ==="/about"){
    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h1>aboutus page</h1>");
  }else{
    res.writeHead(404,{"content-type":"text/html"});
    res.end("<h1>page not found</h1>");
  }

});

app.listen(5000, () => {
  console.log("server running at port 5000....");
});
