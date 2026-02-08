📁 Node.js fs Module – File Operations (Callback-based)
=======================================================

> 🔹 fs → callback-based🔹 fs/promises → async/await⚠️ fs.watch() **callback ke saath hi use karo**

1️⃣ fs.rename(oldPath, newPath)
-------------------------------

### ✅ Why use

*   File / folder ka **naam change** karne ke liye
    
*   File ko **ek folder se dusre folder me move** karne ke liye
    

### 📘 Definition

Existing file ya folder ka **path change karta hai** (rename ya move).

### 🧪 Code Example

```javascript
   import fs from "fs";

// Rename file
fs.rename("data.txt", "info.txt", () => {
  console.log("File renamed");
});

// Move file
fs.rename("info.txt", "./backup/info.txt", () => {
  console.log("File moved");
});
```  

### 🧠 Real Backend Use

*   Logs ko archive folder me move karna
    
*   User upload file ka naam change karna
    

2️⃣ fs.copyFile(src, dest)
--------------------------

### ✅ Why use

*   **Single file copy** karne ke liye
    

### 📘 Definition

Source file ko destination location par **copy** karta hai.

### 🧪 Code Example

```javascript
   import fs from "fs";

fs.copyFile("data.txt", "data-copy.txt", () => {
  console.log("File copied");
});
```

### 🧠 Use Case

➡️ Backup file banana➡️ Template file duplicate karna

3️⃣ fs.cp(src, dest, { recursive: true })
-----------------------------------------

### ✅ Why use

*   **Complete folder + subfolders + files** copy karne ke liye
    

### 📘 Definition

Directory ko **recursively copy** karta hai.

### 🧪 Code Example

```javascript
  import fs from "fs";

fs.cp("project", "project-backup", { recursive: true }, () => {
  console.log("Folder copied");
});
```

### 🧠 Use Case

➡️ Project backup➡️ Deployment process

4️⃣ fs.unlink(path)
-------------------

### ✅ Why use

*   **Single file delete** karne ke liye
    

### 📘 Definition

File ko **permanently delete** karta hai.

### 🧪 Code Example

```javascript
  import fs from "fs";

fs.unlink("temp.txt", () => {
  console.log("File deleted");
});
```

### 🧠 Use Case

➡️ Temporary files cleanup

5️⃣ fs.rmdir(path)
------------------

### ✅ Why use

*   **Empty directory delete** karne ke liye
    

### 📘 Definition

Sirf **empty folder** ko remove karta hai.

### 🧪 Code Example

```javascript
   import fs from "fs";

fs.rmdir("empty-folder", () => {
  console.log("Directory removed");
});
```

⚠️ Folder empty hona **mandatory**

6️⃣ fs.rm(path, { recursive: true, force: true })
-------------------------------------------------

### ✅ Why use

*   Folder ke **andar ka sab kuch delete** karne ke liye
    

### 📘 Definition

Directory ko **recursively delete** karta hai (files + subfolders).

### 🧪 Code Example

```javascript
  import fs from "fs";

fs.rm("old-project", { recursive: true, force: true }, () => {
  console.log("Directory deleted completely");
});
```

🔥 **Very powerful → carefully use karo**

7️⃣ fs.mkdir(path)
------------------

### ✅ Why use

*   **New directory create** karne ke liye
    

### 📘 Definition

Naya folder create karta hai.

### 🧪 Code Example

```javascript
  import fs from "fs";

fs.mkdir("uploads", () => {
  console.log("Folder created");
});
```

### 📌 Nested Folder

```javascript
  fs.mkdir("public/images", { recursive: true }, () => {});
```

### 🧠 Use Case

➡️ User uploads➡️ Logs folder

8️⃣ fs.stat(path)
-----------------

### ✅ Why use

*   File / folder ka **size, type, time** check karne ke liye
    

### 📘 Definition

File ya directory ka **metadata** deta hai.

### 🧪 Code Example

```javascript
   import fs from "fs";

fs.stat("data.txt", (err, stats) => {
  console.log("Size:", stats.size);
  console.log("Is File:", stats.isFile());
  console.log("Is Directory:", stats.isDirectory());
});
```

### 🧠 Use Case

➡️ Upload validation (file size limit)

9️⃣ fs.watch(path)
------------------

### ✅ Why use

*   File / folder me **real-time changes detect** karne ke liye
    

### 📘 Definition

File system changes ko **monitor** karta hai.

### 🧪 Code Example

```javascript
   import fs from "fs";

fs.watch("file-1.txt", (eventType, filename) => {
  console.log("Event:", eventType);
  console.log("File:", filename);
});
```

### 📌 Events

*   change → content changed
    
*   rename → rename / delete
    

### 🧠 Use Case

➡️ Auto reload➡️ Log monitoring➡️ Tools like nodemon

⚠️ fs.watch() **callback-based hi use hota hai**

🧠 SUMMARY TABLE
----------------

| Method           | Use                          |
|------------------|------------------------------|
| fs.rename()      | Rename / move file           |
| fs.copyFile()    | Copy single file             |
| fs.cp()          | Copy whole folder            |
| fs.unlink()      | Delete file                  |
| fs.rmdir()       | Delete empty folder          |
| fs.rm()          | Delete folder recursively    |
| fs.mkdir()       | Create folder                |
| fs.stat()        | File / folder information   |
| fs.watch()       | Monitor file/folder changes |
