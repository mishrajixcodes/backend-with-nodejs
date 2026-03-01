## ram to disk
- done using plain text(that too decoded from buffer), viewdata and typed array. 

```js
const fs = require('fs');

const typedArr = new Int8Array([0x50, 0x72, 0x6f, 0x43, 0x6f, 0x64, 0x72, 0x72]);

const decoder = new TextDecoder('utf-8');
const decodedText = decoder.decode(typedArr);

const view = new DataView(typedArr.buffer);

fs.writeFileSync('output.txt', typedArr);
fs.appendFileSync('output.txt', '\n');
fs.appendFileSync('output.txt', decodedText);
fs.appendFileSync('output.txt', '\n');
fs.appendFileSync('output.txt', view);
```

## ram to network
```js
import http from "http";

const a = new ArrayBuffer(8);
const uint8Array = new Uint8Array(a).fill('0x62');

startServer(uint8Array);

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

```

## network to ram
- assuming above server is live.
```js
fetch('http://localhost:3000')
    .then((res) => res.arrayBuffer())       // read the binary buffer
    .then((data) => {
        
        const view = new DataView(data);
        const typedArray = new Int8Array(data);

        const decoder = new TextDecoder('utf-8');

        console.log(decoder.decode(view));
        console.log(decoder.decode(typedArray));
    });
```