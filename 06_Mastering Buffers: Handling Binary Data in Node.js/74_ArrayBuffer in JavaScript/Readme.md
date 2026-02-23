📦 ArrayBuffer (JavaScript)
===========================

🔹 Definition
-------------

*   **ArrayBuffer** is an **array of bytes**.
    
*   It represents a **fixed-length binary memory buffer**.
    
*   In the **browser**, ArrayBuffer() is a **constructor function**.
    
*   Therefore, it **must be called using the new keyword**.
    

```javascript
  let buffer = new ArrayBuffer(16);   
```

🔹 Purpose
----------

*   Used to handle **binary data** in JavaScript.
    
*   Mainly used in:
    
    *   Web APIs
        
    *   Low-level operations
        
    *   Streams
        
    *   WebSockets
        

🔹 Key Characteristics
----------------------

*   Stores **raw bytes only**
    
*   Has a **fixed length**
    
*   **Cannot be updated directly**
    
*   Acts only as a **memory container**
    

🔑 Properties of ArrayBuffer
----------------------------

| Property        | Description                                      |
|-----------------|--------------------------------------------------|
| byteLength      | Returns the total size of the buffer in bytes    |
| detached        | Indicates whether the buffer is detached         |
| maxByteLength   | Maximum size allowed for the buffer              |
| resizable       | Indicates whether the buffer can be resized      |


⚠️ resizable and maxByteLength are **new features**⚠️ Not supported in all JavaScript engines

🔹 Initial State
----------------

*   When an ArrayBuffer is created, all bytes are initialized to **0**
    

Example (16 bytes):

```bash
   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00   
```

✏️ Updating ArrayBuffer
-----------------------

*   ❌ We **cannot directly update** an ArrayBuffer.
    
*   ✔ To read or write data, we use:
    
    *   **TypedArray**
        
    *   **DataView**
        

📏 Size Limitation
------------------

*   ~1.99 GiB (2³¹ − 1 bytes)
    

🧹 Memory Management
--------------------

*   ArrayBuffers are **garbage collected** in JavaScript.
    
*   Memory is automatically freed when no reference exists.
    

🧠 Quick Summary
----------------

*   📦 ArrayBuffer = array of bytes
    
*   🔨 Created using new ArrayBuffer(size)
    
*   🚫 Direct modification not allowed
    
*   ✏️ Use TypedArray or DataView to update
    
*   🧹 Automatically garbage collected
    
*   📏 Max size ≈ **1.99 GiB**

## Extra

The **maximum size of an ArrayBuffer is not fixed by JavaScript itself**. It depends on the **JavaScript engine**, **browser**, **operating system**, and whether you’re using **32-bit or 64-bit** architecture.

### 📏 Practical limits you should know

| Environment                     | Approximate max size        |
|---------------------------------|-----------------------------|
| Most modern browsers (64-bit)   | ~1–2 GB                     |
| Chrome / Firefox (typical)      | ≈ 1.5–2 GB                  |
| Node.js (64-bit)                | Up to ~2 GB                 |
| 32-bit systems                  | Much lower (few hundred MB) |


⚠️ Even if memory is available, browsers often **cap ArrayBuffer size** to prevent crashes.

### 📦 Why people say “~2 GB”?

*   Internally, many engines limit ArrayBuffer length to **signed 32-bit integers**
    
*   Max value: 2³¹ − 1 ≈ 2.147 GB
    
*   Some engines reserve space → usable size ≈ **1.99 GB**
    

### 🧪 Example (may throw error)

```javascript
   const buffer = new ArrayBuffer(2 * 1024 * 1024 * 1024); // 2 GB   
```

❌ Likely result:

```bash
   RangeError: Invalid array buffer length   
```

### 🔑 Important notes

*   ArrayBuffer stores **raw bytes**
    
*   You **cannot resize** a normal ArrayBuffer
    
*   You must use:
    
    *   **TypedArray** (Uint8Array, Int32Array, etc.)
        
    *   **DataView**
        
*   Memory is **garbage collected**
    

### 🆕 Resizable ArrayBuffer (modern JS)

```javascript
   const buffer = new ArrayBuffer(1024, { maxByteLength: 1024 * 1024 });   
```

Still subject to **engine limits** ❗