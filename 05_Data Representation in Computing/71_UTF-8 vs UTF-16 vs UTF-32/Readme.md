🧩 UTF-8 vs UTF-16
------------------

### 📌 Full Form

**UTF** stands for **Unicode Transformation Format**

🔁 UTF-8
--------

### 🔹 Encoding Type

*   **Variable-length encoding**
    
*   Uses **1 to 4 bytes** per character
    

### 🔹 Byte Usage

| Character Range | Bytes Used |
|-----------------|------------|
| ASCII (0–127)   | 1 byte     |
| Other Unicode   | 2–4 bytes  |


### 🔹 Byte Structure (Prefix Bits)

*   **1 byte** → 0xxxxxxx
    
*   **2 bytes** → 110xxxxx 10xxxxxx
    
*   **3 bytes** → 1110xxxx 10xxxxxx 10xxxxxx
    
*   **4 bytes** → 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
    

### 🔹 Advantages

*   **Very memory-efficient** for English / ASCII-heavy text
    
*   **Backward compatible with ASCII**
    
*   Widely used on the **web, files, and databases**
    

### 🔹 Disadvantages

*   Decoding is **slightly slower** due to variable-length bytes
    

🔁 UTF-16
---------

### 🔹 Encoding Type

*   **Fixed + variable length**
    
*   Uses **2 or 4 bytes** per character
    

### 🔹 Byte Usage

| Character Type | Bytes Used |
|----------------|------------|
| Most Unicode   | 2 bytes (16 bits) |
| Beyond U+FFFF  | 4 bytes (surrogate pairs) |


### 🔹 Variants

*   **UTF-16 LE** → Little Endian (least significant byte first)
    
*   **UTF-16 BE** → Big Endian (most significant byte first)
    

### 🔹 Advantages

*   **Faster and simpler decoding**
    
*   Efficient for languages with many non-ASCII characters
    

### 🔹 Disadvantages

*   **Consumes more memory** for ASCII-heavy content
    
*   Not backward compatible with ASCII
    

🔍 Key Comparison
-----------------

| Feature           | UTF-8                 | UTF-16                  |
|-------------------|-----------------------|--------------------------|
| Byte size         | 1–4 bytes             | 2–4 bytes                |
| ASCII efficiency  | ✅ Very good           | ❌ Poor                  |
| Memory usage      | Lower (English text)   | Higher (English text)    |
| Decoding speed    | Slightly slower       | Faster                   |
| Web standard      | ✅ Yes                | ❌ No                    |


✅ Final One-Line Summary 
------------------------------------

*   **UTF-8** is best for **web and English-based text** due to memory efficiency.
    
*   **UTF-16** is better for **non-ASCII-heavy languages** due to faster decoding.