🧠 UTF-8 Encoding
=================

1\. What is UTF-8?
------------------

Computers do **not store characters**, they store **bytes (0s and 1s)**.

👉 **UTF-8** is a **rule-based encoding system** that defines:

*   how many **bytes** a character will use
    
*   what **bit pattern** those bytes must follow
    

UTF-8 converts:

```bash
   Character ⇄ Bytes   
```

2\. When Does Encoding Happen?
------------------------------

Encoding occurs at **two stages**:

### 1️⃣ While Saving a File

*   Text editor takes characters (A, अ, 😀)
    
*   Applies UTF-8 rules
    
*   Converts them into bytes
    
*   Stores bytes in the file
    

**Character → Bytes**

### 2️⃣ While Opening a File

*   Program reads bytes from the file
    
*   Decodes them using UTF-8 rules
    
*   Displays characters on screen
    

**Bytes → Character**

⚠️ If encoding used while saving ≠ encoding used while opening→ **garbage / unreadable text**

3\. UTF-8 Core Properties
-------------------------

### ✅ Variable-Length Encoding

A character can take:

*   1 byte
    
*   2 bytes
    
*   3 bytes
    
*   4 bytes
    

### ✅ ASCII Compatible

*   Characters U+0000 to U+007F (0–127)
    
*   Stored in **1 byte**
    
*   Same as ASCII
    
*   Old systems still work
    

4\. UTF-8 Byte Rules (MOST IMPORTANT)
-------------------------------------

| Unicode Range        | Bytes | Binary Pattern                                   | Used For        |
|----------------------|-------|--------------------------------------------------|-----------------|
| U+0000 – U+007F      | 1     | 0xxxxxxx                                         | English / ASCII |
| U+0080 – U+07FF      | 2     | 110xxxxx 10xxxxxx                                | European        |
| U+0800 – U+FFFF      | 3     | 1110xxxx 10xxxxxx 10xxxxxx                       | Hindi, Asian    |
| U+10000 – U+10FFFF   | 4     | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx              | Emoji           |


### ❗ Important 

Prefix bits:

```bash
   0  
   110  
   1110  
   11110 
   10   
```

*   ❌ NOT part of character data
    
*   ✅ Only indicate **how many bytes are used**
    

5\. UTF-8 Bit Capacity
----------------------

| Bytes | Data Bits Stored |
|-------|------------------|
| 1 byte | 7 bits |
| 2 bytes | 11 bits |
| 3 bytes | 16 bits |
| 4 bytes | 21 bits |

6\. Tools to Inspect UTF-8 (Terminal)
-------------------------------------

### 🔹 xxd filename

*   Shows **hexadecimal**
    
*   Grouped by 2 bytes
    

### 🔹 xxd -g 1 filename

*   Shows **each byte separately**
    
*   Best for UTF-8 analysis
    

### 🔹 xxd -b filename

*   Shows **binary (0/1)**
    
*   Useful to see prefix patterns
    

### 🔧 Editor Tool

*   Use **Hex Editor extension** (VS Code)
    
*   View file **byte-by-byte** (memory-level view)
    

7\. Real Example: Hindi Character **“अ”**
-----------------------------------------

### Unicode

```bash
   U+0905   
```

### UTF-8 Bytes

```bash
   E0 A4 85   
````

### Binary

```bash
   11100000 10100100 10000101   
```

### Why 3 Bytes?

*   Starts with 1110xxxx
    
*   1110 → indicates **3-byte UTF-8 character**
    

8\. Real-World Programming Case (Node.js)
-----------------------------------------

```bash
   fs.readFile("file.txt")   
   ```

*   Returns a **Buffer**
    
*   Buffer contains **raw UTF-8 bytes**
    
*   Same bytes visible using xxd
    

👉 Node.js exposes **actual stored bytes**

9\. One-Line Final Summary ⭐
----------------------------

**UTF-8 is a variable-length encoding that converts Unicode characters into 1–4 bytes, and those raw bytes are what get stored in files and memory.**