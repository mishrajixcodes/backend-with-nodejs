📌 Endianness & Byte Order — Quick Revision Notes
=================================================

🔁 What is Endianness?
----------------------

**Endianness** defines the **byte order** in which multi-byte data is stored in memory.

### Two Types

*   **Little Endian (LE)**
    
    *   Least Significant Byte (LSB) stored at the **lowest memory address**
        
*   **Big Endian (BE)**
    
    *   Most Significant Byte (MSB) stored at the **lowest memory address**
        

📅 **Analogy**  
Just like date formats differ across regions  
(e.g., **DD-MM-YYYY** vs **MM-DD-YYYY**),  


🌐 Why Endianness Matters in Networking
---------------------------------------

*   Different systems may use **different byte orders**
    
*   Direct data exchange can cause **misinterpretation**
    
*   **Solution:** Systems explicitly share the **encoding / byte order format** with the data
    

👤 Human vs 💻 Machine Preference
---------------------------------

| Format        | Description                          |
|--------------|--------------------------------------|
| **Big Endian**    | MSB first → more **human-readable** |
| **Little Endian** | LSB first → more **CPU-friendly**   |


📖 Origin of the Term “Endian”
------------------------------

*   Comes from **Jonathan Swift’s** _**Gulliver’s Travels**_
    
*   A fictional conflict between:
    
    *   **Big-Endians** (break egg from big end)
        
    *   **Little-Endians** (break egg from small end)
        

😄 Used metaphorically for byte order disputes

🧭 BOM (Byte Order Mark)
------------------------

*   **BOM** is a special Unicode character: **U+FEFF**
    
*   Stored at the **start of a file**
    
*   Indicates:
    
    *   Encoding (UTF-8, UTF-16, UTF-32)
        
    *   Endianness (for UTF-16 / UTF-32)
        

📚 Common BOM Values
--------------------

| Encoding      | BOM (Hex) | Meaning              |
|--------------|-----------|----------------------|
| **UTF-8**     | EF BB BF  | Optional identifier  |
| **UTF-16 LE** | FF FE     | Little Endian        |
| **UTF-16 BE** | FE FF     | Big Endian           |


📝 BOM is **metadata**, not actual content

💡 UTF-8 and BOM
----------------

*   UTF-8 uses **variable-length encoding**
    
*   **Endianness is not required**
    
*   BOM (EF BB BF) is **optional**
    
*   Some editors include it only for **file identification**
    

⚙️ Endianness in Node.js
------------------------

*   Node.js works internally in **Little Endian**
    
*   Check system endianness:
    

```javascript
   import os from 'node:os';  console.log(os.endianness()); // 'LE' or 'BE'   
```

🧪 System Commands to Check Endianness
--------------------------------------

| Platform              | Command                               | Purpose                         |
|----------------------|----------------------------------------|---------------------------------|
| Linux (Bash)          | `lscpu`                                | Check “Byte Order”              |
| Windows (PowerShell)  | `[BitConverter]::IsLittleEndian`       | `True` → Little Endian          |


🧠 One-Line Summary
-------------------

> Endianness defines **how bytes are ordered in memory**, BOM tells systems **how to interpret encoded data**, and modern systems (including Node.js) mostly use **Little Endian**.