//we can also read arraybuffer from network to ram. 
// server.js should be running here
fetch('http://localhost:3000')
    .then((res) => res.arrayBuffer())       // read the binary buffer
    .then((data) => {
        
        const view = new DataView(data);
        const typedArray = new Int8Array(data);

        const decoder = new TextDecoder('utf-8');

        console.log(decoder.decode(view));
        console.log(decoder.decode(typedArray));
    });