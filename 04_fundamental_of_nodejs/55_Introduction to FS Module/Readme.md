Introduction to FS Module (File System)
---------------------------------------

The **FS (File System) module** is an **internal (core / native) module** in **Node.js**.It allows us to **work with files and directories**, such as reading, writing, updating, and deleting files.

Since it is a core module, **no installation is required**.

### Importing the FS Module

```javascript
   import fs from 'node:fs';   
```

Node.js provides file system methods in **two styles**:

*   **Synchronous (Blocking)**
    
*   **Asynchronous (Non-Blocking)**
    

Most file system methods are available in **both forms**.

1\. readFileSync(path, encoding)
--------------------------------

### Description

*   readFileSync() is a **synchronous** method.
    
*   It **blocks the main thread** until the file reading is completed.
    
*   Because it blocks execution, it is **generally avoided in real applications**.
    

### Syntax

```javascript
   const data = fs.readFileSync(path, encoding);   
```

### Parameters

*   **path** → Path of the file
    
*   **encoding** → File format (e.g., 'utf-8')
    

### Return Value

*   Returns a **Buffer** if encoding is not provided.
    
*   If encoding is provided, it returns a **string**.
    

### Example

```javascript
   import fs from 'node:fs'; 
    const data = fs.readFileSync('./data.txt'); 
     console.log(data.toString());   
```

### Key Points

*   Blocks the main thread ❌
    
*   Slows down performance ❌
    
*   Mostly used for **small scripts or testing only**
    

2\. readFile(path, encoding, callback)
--------------------------------------

### Description

*   readFile() is an **asynchronous** method.
    
*   It **does not block the main thread**.
    
*   Uses a **callback function** to handle results.
    

### Syntax

```javascript
   fs.readFile(path, encoding, callback);   
```

### Callback Parameters

The callback function receives **two parameters**:

1.  **error** → Contains error details if any error occurs
    
2.  **data** → Contains file data (Buffer or string)
    

### Example

```javascript
   import fs from 'node:fs';

fs.readFile('./data.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
```

### Key Points

*   Non-blocking ✅
    
*   Uses callbacks ❌ (can cause callback hell)
    
*   Better than synchronous methods
    

3\. node:fs/promises – readFile()
---------------------------------

### Description

*   node:fs/promises provides **only asynchronous methods**.
    
*   Uses **Promises**, making code **cleaner and more readable**.
    
*   Recommended for **modern Node.js applications**.
    

### Importing fs/promises

```javascript
   import fs from 'node:fs/promises';   
```

### Syntax

```javascript
   const data = await fs.readFile(path, encoding); 
```

### Example (Using async/await)

```javascript
   import fs from 'node:fs/promises';

async function readData() {
  try {
    const data = await fs.readFile('./data.txt', 'utf-8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readData();
```

### Key Points

*   Non-blocking ✅
    
*   Cleaner syntax ✅
    
*   Uses async/await ✅
    
*   **Best and recommended approach** ✅
    

Final Recommendation
--------------------

| Method                    | Blocking | Style                  | Recommended |
|---------------------------|----------|------------------------|-------------|
| readFileSync()            | Yes ❌   | Synchronous            | ❌ No       |
| readFile()                | No ✅    | Callback               | ⚠️ Limited |
| fs/promises.readFile()    | No ✅    | Promise / async-await  | ✅ Yes      |


### ✅ **Always prefer node:fs/promises for file operations**