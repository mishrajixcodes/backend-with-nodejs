🧵 Buffer Pool in Node.js 
==========================================

1️⃣ What is a Buffer?
---------------------

*   Buffer is used to handle **binary data** in Node.js.
    
*   Internally, a Buffer is a **view over an ArrayBuffer**.
    
*   The byteLength of a Buffer is **what you request**, but the **underlying ArrayBuffer may be larger**.
    

2️⃣ Buffer Creation Methods (High Level)
----------------------------------------

| Method                     | Uses Buffer Pool | Zero-filled | Speed     |
|---------------------------|------------------|-------------|-----------|
| Buffer.alloc()             | ❌ No             | ✅ Yes       | Slower    |
| Buffer.allocUnsafe()       | ✅ Yes (usually)  | ❌ No        | 🚀 Fast   |
| Buffer.allocUnsafeSlow()   | ❌ No             | ❌ No        | Slow      |
| Buffer.from()              | ✅ Yes            | ❌ No        | Fast      |
| Buffer.concat()            | ✅ Yes            | ❌ No        | Fast      |


3️⃣ Buffer Pool Basics
----------------------

*   Node.js maintains a **shared buffer pool**
    
*   Default pool size:
    

```javascript
  Buffer.poolSize === 8192 // 8 KiB   
```

*   The pool is a **single large ArrayBuffer**
    
*   Multiple small buffers **share the same ArrayBuffer**
    

4️⃣ Pool Eligibility Condition (VERY IMPORTANT ⭐)
-------------------------------------------------

A buffer will use the pool **only if**:

```javascript
   bufferSize < (Buffer.poolSize >>> 1)   
```

Which means:

```text
   bufferSize < 4096 bytes (4 KiB)   
```

### ✅ Uses Pool When:

*   Buffer size is **less than 4KB**
    
*   Enough space is available in the pool
    

### ❌ Does NOT Use Pool When:

*   Buffer size ≥ 4096 bytes
    
*   Pool doesn’t have enough remaining space
    

5️⃣ alloc vs allocUnsafe (Behind the Scenes)
--------------------------------------------

### 🟢 Buffer.alloc(size)

*   Creates **new ArrayBuffer**
    
*   arrayBuffer.byteLength === size
    
*   Memory is **zero-filled**
    
*   Safer, but slower
    

```javascript
   Buffer.alloc(4).buffer.byteLength // 4   
```

### 🔴 Buffer.allocUnsafe(size)

*   Does **NOT** clear memory
    
*   Usually uses **shared 8KB pool**
    
*   Actual ArrayBuffer size = **8192 bytes**
    
*   Uses **byteOffset** to place data
    
*   Leaves initial **8 bytes** unused internally
    

```javascript
  Buffer.allocUnsafe(4).buffer.byteLength // 8192   
```

📌 Multiple buffers can point to the **same ArrayBuffer**

6️⃣ Why allocUnsafe() is FAST 🚀
--------------------------------

*   No zero-filling (skips memory cleanup)
    
*   Memory already allocated (from pool)
    
*   Just creates a **slice view** over pool
    
*   Less GC pressure
    

7️⃣ allocUnsafeSlow()
---------------------

```javascript
   Buffer.allocUnsafeSlow(size)   
```

*   ❌ Does **NOT** use buffer pool
    
*   Always creates a **new ArrayBuffer**
    
*   Slower + more memory usage
    

```javascript
   Buffer.allocUnsafeSlow(4).buffer.byteLength // 4   
```

8️⃣ Buffer.from() & Buffer.concat()
-----------------------------------

*   Internally use allocUnsafe()
    
*   Benefit from buffer pool
    
*   Optimized for performance
    

9️⃣ Changing Buffer Pool Size
-----------------------------

```javascript
   Buffer.poolSize = 16384; // 16 KB   
```

⚠️ Important:

*   First pool is **always 8192 bytes**
    
*   New size applies **from the second pool onward**
    

🔟 Buffer Constants
-------------------

```javascript
   import { Buffer, constants } from "buffer";   
```

| Constant                     | Meaning                         |
|------------------------------|---------------------------------|
| constants.MAX_LENGTH         | Max Buffer size (~2GB)           |
| constants.MAX_STRING_LENGTH  | Max String size (~1GB)           |


1️⃣1️⃣ Key Interview Takeaways 🎯
---------------------------------

*   allocUnsafe() ≠ unsafe size, **unsafe content**
    
*   Pool is used only for **small buffers**
    
*   size < Buffer.poolSize >>> 1
    
*   allocUnsafeSlow() completely bypasses pool
    
*   Buffer.from() & Buffer.concat() are optimized
    

🧠 One-Line Summary (Perfect for Revision)
------------------------------------------

> **Node.js uses an 8KB shared buffer pool to speed up small buffer allocations; allocUnsafe() slices memory from this pool when size < 4KB, avoiding zero-fill and improving performance.**