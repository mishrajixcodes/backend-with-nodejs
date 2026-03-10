🧾 Base64 in Node.js — Crisp Notes
==================================

🔐 What is Base64 Used for?
---------------------------

Base64 is used to **encode binary data** (images, PDFs, files, buffers) into **text format**, mainly because many communication systems support **only text**, not raw binary.

📌 Examples of text-only systems:

*   HTTP / HTTPS
    
*   Emails (SMTP)
    
*   JSON / XML
    
*   URLs & query parameters
    

📦 Base64 Characteristics
-------------------------

*   Uses **64 ASCII characters**:A–Z, a–z, 0–9, +, /
    
*   Uses **\= for padding** when input size is not divisible by 3
    
*   **Increases file size by ~1.3× (≈33%)**
    
*   Encoding is **reversible (lossless)**
    

📈 Size increase reason:

```bash
   3 bytes (24 bits) → 4 Base64 characters   
```

🖥️ Base64 in Node.js (Files & Buffers)
---------------------------------------

When a file is encoded in Base64:

*   Original binary → text
    
*   File size increases by ~30–35%
    

This is acceptable when:

*   Embedding files in HTML / CSS
    
*   Sending files via APIs
    
*   Storing binary inside JSON
    

🧪 Terminal Commands
--------------------

### 🔡 Encode a File to Base64

```bash
   base64 image.png   
```

This outputs the Base64-encoded string of the file.

### 🌐 Generate a Data URL (for inline images)

```bash
   echo "data:image/png;base64,$(base64 image.png)"   
```

You can directly use the output in HTML:

```bash
  ![](data:image/png;base64,iVBORw0KGg...)   
```

🧬 Why Does Base64 Exist?
-------------------------

Because **raw binary may contain control or special characters** that:

*   Break protocols
    
*   Get corrupted
    
*   Are not supported by text-based systems
    

👉 Base64 converts binary → **safe text**

🔗 Base64url (URL-Safe Base64)
------------------------------

Base64url is a **modified version of Base64** designed for URLs and query parameters.

### 🔄 Differences

| Base64 | Base64url |
|--------|-----------|
| +      | -         |
| /      | _         |
| = (padding) | ❌ removed |

### 📌 Why remove =?

*   \= has special meaning in URLs
    
*   Padding length can be inferred during decoding
    

📌 Where Base64url Is Used
--------------------------

*   🔐 JWT tokens
    
*   🌐 URL query parameters
    
*   📁 Web APIs
    

### Example:

```text
Base64:     abc+123/==
Base64url: abc-123_
```

🧵 TL;DR (Quick Revision)
-------------------------

*   Base64 = binary → text encoding
    
*   Used when systems support **only text**
    
*   Increases size by ~1.3×
    
*   \= is **metadata**, not encoded data
    
*   Base64url makes Base64 **URL-safe**