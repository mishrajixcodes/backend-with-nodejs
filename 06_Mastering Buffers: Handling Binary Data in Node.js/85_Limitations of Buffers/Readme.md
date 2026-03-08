🚫 Limitations of Buffers in Node.js
------------------------------------

### 📌 What is a Buffer?

*   A **Buffer** stores data temporarily in **RAM**.
    
*   When reading a file using Buffer, **the entire file is loaded into memory at once**.
    

```javascript
   import fs from "fs";  
   const data = fs.readFileSync("large-file.txt");   
```

### ❌ Limitations of Using Buffers

1.  **High Memory Usage**
    
    *   Entire file is loaded into RAM.
        
    *   Not suitable for **large or heavy files**.
        
2.  **Slow Performance**
    
    *   Reading large files at once slows down the process.
        
    *   Blocks execution (especially with readFileSync).
        
3.  **Risk of System Crash**
    
    *   Very large files can cause:
        
        *   💥 Memory overflow
            
        *   💥 Application crash
            
4.  **Not Memory Efficient**
    
    *   Wastes RAM when only a part of the file is needed.
        

🚀 Solution: Use Streams
------------------------

### 📦 What are Streams?

*   **Streams process data in small chunks** instead of loading everything at once.
    
*   Ideal for **reading/writing large files**.
    

### ✅ Advantages of Streams

*   ✔ Low memory consumption
    
*   ✔ Faster processing
    
*   ✔ Safe for large files
    
*   ✔ Better performance
    

### 🧠 Key Difference (One-Line Revision)

| Buffer | Stream |
|------|--------|
| Loads whole file into RAM | Reads file in chunks |
| High memory usage | Low memory usage |
| Slow for large files | Fast and efficient |
| Risk of crash | Safe for large data |


### 🔑 Final Revision Tip

> **Use Buffers for small data.Use Streams for large files.**