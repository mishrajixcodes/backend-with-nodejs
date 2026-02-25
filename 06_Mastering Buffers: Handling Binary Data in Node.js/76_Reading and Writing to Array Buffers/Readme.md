📘 Reading & Writing to ArrayBuffer (JavaScript)
------------------------------------------------

📦 1. What is ArrayBuffer?
--------------------------

*   ArrayBuffer is a **fixed-size block of raw binary memory**.
    
*   It **only stores data**, it **cannot read or write** data by itself.
    
*   To access data inside it, we use:
    
    *   **DataView**
        
    *   **TypedArray** (Uint8Array, Int16Array, etc.)
        

```javascript
   const buffer = new ArrayBuffer(4); // 4 bytes of memory   
```

🔍 2. What is DataView?
-----------------------

*   DataView is a **constructor** used to **read and write data** inside an ArrayBuffer.
    
*   It provides methods to handle:
    
    *   Signed / Unsigned integers
        
    *   Different byte sizes (8, 16, 32 bits)
        
    *   Floating point numbers
        

```javascript
   const view = new DataView(buffer);   
```

📐 3. DataView Constructor Arguments
------------------------------------

```javascript
   new DataView(arrayBuffer, byteOffset, byteLength)   
```

| Argument      | Meaning                                      |
|---------------|----------------------------------------------|
| arrayBuffer   | The buffer to work with                      |
| byteOffset    | Starting byte index (default = 0)            |
| byteLength    | Number of bytes to control (optional)        |


### 🔹 What is byteOffset?

*   It defines **from which byte DataView starts reading/writing**.
    
*   Default value is 0.
    
*   Useful when working with **part of a buffer**.
    

```javascript
  const view = new DataView(buffer, 1); // starts from byte index 1   
```

✍️ 4. Writing Data (set methods)
--------------------------------

### setInt8(index, value)

*   Writes **1 byte (8 bits)**.
    
*   Stores **signed integer** (-128 to 127).
    

```javascript
view.setInt8(0, 80);        // Decimal
view.setInt8(1, 0b1010000); // Binary
view.setInt8(2, 0x50);      // Hexadecimal
view.setInt8(3, 0o120);     // Octal
   
```

✅ All values above store **80** in different bytes.

📥 5. Reading Data (get methods)
--------------------------------

### getInt8(index)

*   Reads **signed value**
    
*   Range: -128 to 127
    

### getUint8(index)

*   Reads **unsigned value**
    
*   Range: 0 to 255
    

```javascript
   view.getInt8(1);   // 80  view.getUint8(1); // 80   
```

➖ 6. Signed vs Unsigned Example
-------------------------------

```javascript
   view.setInt8(0, -1);   
```

| Method          | Output |
|-----------------|--------|
| `getInt8(0)`    | `-1`   |
| `getUint8(0)`   | `255`  |


### Why?

*   \-1 in binary = 11111111
    
*   Signed → MSB is sign bit → -1
    
*   Unsigned → all bits are value → 255
    

🧠 7. Key Points to Remember
----------------------------

*   ArrayBuffer → memory only (no read/write)
    
*   DataView → full control over buffer data
    
*   byteOffset → starting position in buffer
    
*   getInt8() → signed value
    
*   getUint8() → unsigned value