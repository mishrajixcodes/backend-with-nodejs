File System (fs) Module – Writing Files in Node.js
--------------------------------------------------

The **fs (File System)** module is used to work with files in Node.js.

✍️ fs.writeFile(filePath, content)
----------------------------------

### 🔹 Purpose

Used to **write data to a file**.

### 🔹 How it works

*   Takes **file path / file name** and **content** as arguments
    
*   **Overwrites** the file if it already exists
    
*   **Creates a new file** if it does not exist
    

### 🔹 Behavior

File StatusResultFile existsOld content is **deleted**, new content is writtenFile does not existNew file is **created** and content is written

### 🔹 Example

```javascript
   const fs = require("fs");

fs.writeFile("data.txt", "Hello World", (err) => {
  if (err) throw err;
  console.log("File written successfully");
});
```

➕ fs.appendFile(filePath, content)
----------------------------------

### 🔹 Purpose

Used to **add data to an existing file**.

### 🔹 How it works

*   Takes **file path / file name** and **content** as arguments
    
*   **Does not delete** existing content
    
*   Adds new content **at the end of the file**
    

### 🔹 Behavior

File StatusResultFile existsNew content is **added after old content**File does not existNew file is **created** and content is written

### 🔹 Example

```javascript
   const fs = require("fs");

fs.appendFile("data.txt", "\nNew Line Added", (err) => {
  if (err) throw err;
  console.log("Content appended successfully");
});
```

🔄 Difference Between writeFile and appendFile
----------------------------------------------

## Difference Between writeFile() and appendFile()

| Feature                     | writeFile()     | appendFile()   |
|----------------------------|-----------------|----------------|
| Existing content           | ❌ Deleted       | ✅ Preserved   |
| New content behavior       | Written fresh   | Added at end  |
| Creates file if not exists | ✅ Yes           | ✅ Yes         |


### 🧠 Easy Way to Remember

*   **writeFile = Write fresh (erase old)**
    
*   **appendFile = Add more (keep old)**