//we can also send arrayBuffer through network here one example
//ram to network

import http from "http";

const unit8Array = new Uint8Array(4);

unit8Array[0] = 0x41;
unit8Array[1] = 0x4d;
unit8Array[2] = 0x41;
unit8Array[3] = 0x4e;

startServer(unit8Array);

function startServer(responseData) {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/txt; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url === "/favicon.ico") {
      res.end();
      return;
    }
    res.end(Buffer.from(responseData.buffer));
  });

  server.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
  });
}
