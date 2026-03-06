# 🧃 Buffer Methods & Properties in Node.js 🧠

📦 **Buffers in Node.js** come with powerful built-in methods and properties to handle **binary data** efficiently.

---

## ⚙️ Methods 🔧

### 📤 `Buffer.from(data)`
➡️ Converts a string / array / ArrayBuffer into a new Buffer.

```js
const buf = Buffer.from("Hello World!");
console.log(buf.toString()); // Hello World!

### ✍️ Buffer.write(string)

➡️ Writes a string to an existing buffer (returns number of bytes written).

```javascript
   const buf = Buffer.alloc(8); 
    buf.write("abc"); 
     console.log(buf.toString()); // abc   
```

### 📄 Buffer.toJSON()

➡️ Converts the buffer into a JSON object.

```javascript
   console.log(buf.toJSON());   
```

```javascript
{
  "type": "Buffer",
  "data": [97, 98, 99, 0, 0, 0, 0, 0]
}
```

### ✂️ Buffer.subarray(start, end?)

➡️ Similar to slice() but returns a **view** of the original buffer (no copy).

```javascript
   console.log(buf.subarray(2).toString()); // c   
```

### 🧬 Buffer.copy(targetBuffer, targetStart, sourceStart, sourceEnd)

➡️ Copies part of one buffer into another buffer.

```javascript
const b2 = Buffer.alloc(8);
buf.copy(b2, 0, 0, 1);
console.log(b2.toString()); // a
```

### 🔍 Buffer.includes(value)

➡️ Checks whether the buffer contains a specific value or byte sequence.

```javascript
   buf.includes('a'); // true   
```

### 🔁 Buffer.fill(value)

➡️ Fills the entire buffer with the given value.

```javascript
  buf.fill(0x41); // 'A'
console.log(buf.toString()); // AAAAAAAA

```

### 🧾 Buffer.readInt8(offset)

➡️ Reads a signed 8-bit integer from the specified offset.

```javascript
   buf.writeInt8(-10, 0);  
   console.log(buf.readInt8(0)); // -10   
```

### ✏️ Buffer.writeInt8(value, offset)

➡️ Writes a signed 8-bit integer at the given offset.

```javascript
   buf.writeInt8(20, 1);   
```

### 🔢 Buffer.at(index)

➡️ Returns the byte value at the given index (supports negative indexing).

```javascript
  console.log(buf.at(0)); // 65 (ASCII for 'A')   
```

🧩 Properties 📐
----------------

### 📏 buffer.buffer

➡️ Returns the underlying **ArrayBuffer**.

### 📐 buffer.byteLength

➡️ Number of bytes used by the buffer.

### 🔁 buffer.byteOffset

➡️ Offset of the buffer within the underlying ArrayBuffer.

### 🧮 buffer.length

➡️ Total allocated size in bytes (usually same as byteLength).

✅ Summary
---------

*   Buffers handle **raw binary data**
    
*   Extremely useful for **files, streams, TCP, and binary protocols**
    
*   Faster and more memory-efficient than strings for low-level operations
    

🚀 **Tip:** Always prefer Buffer.from() over new Buffer() (deprecated).