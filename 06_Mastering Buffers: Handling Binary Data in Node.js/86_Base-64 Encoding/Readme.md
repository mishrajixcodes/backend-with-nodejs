🔐 Base64 Encoding — Crisp Revision Notes
=========================================

🧠 What is Base64?
------------------

Base64 is an **encoding scheme** that converts **binary data (0s and 1s)** into **text format** so it can be safely stored or transmitted in systems that support **only text characters**.

> ⚠️ Base64 is **not encryption** and **not compression** — it is only **encoding**.

🎯 Why Do We Need Base64?
-------------------------

Many systems **cannot safely handle raw binary data**, such as:

*   🌐 HTTP headers
    
*   📧 Emails
    
*   📝 JSON / XML
    
*   🖼️ HTML / CSS (inline images)
    

Binary data may contain **control or special characters** that can:

*   Break protocols
    
*   Get corrupted
    
*   Be misinterpreted
    

👉 **Base64 solves this** by converting binary → text using only safe characters.

🔢 Base64 Character Set
-----------------------

Total **64 characters**:

```javascript
A–Z  (26)
a–z  (26)
0–9  (10)
+ /
----------------
Total = 64
   
```

➡️ Each Base64 character represents **6 bits** (2⁶ = 64)

📦 Why “6 bits”?
----------------

Because:

*   Base64 has **64 symbols**
    
*   log₂(64) = 6
    
*   So **each Base64 character encodes exactly 6 bits**
    

🌐 Base64 in Browsers (JavaScript)
----------------------------------

### Built-in Functions:

| Method  | Purpose                         |
|--------|----------------------------------|
| btoa() | Binary (string) ➜ Base64         |
| atob() | Base64 ➜ Binary (string)         |

### ⚠️ Limitation:

*   These functions **only work with strings**
    
*   They **do not accept raw binary** like ArrayBuffer, Blob, etc.
    
*   Internally, the string is converted to **UTF-8 binary first**
    

🧮 Why Base64 Uses 3 Bytes (24 bits)?
-------------------------------------

### Key Math:

*   ASCII character = **8 bits**
    
*   Base64 character = **6 bits**
    
*   LCM of 8 and 6 = **24 bits**
    

### So:

```javascript
3 bytes × 8 bits = 24 bits
24 bits ÷ 6 bits = 4 Base64 characters
```

✅ This ensures:

*   Clean encoding into 6-bit units
    
*   Clean decoding back into 8-bit ASCII
    

📏 Why Padding Is Required (=)
------------------------------

Base64 **must always encode full 24-bit blocks**.

### If input data is incomplete:

Input BytesMissing BytesPadding3 bytes0No padding2 bytes1=1 byte2==

👉 Missing bits are filled with **zero bits**👉 Padding is represented using **\=**

❓ Why Not Pad Only to 6 Bits?
-----------------------------

If we padded only to complete **6-bit groups**:

*   Decoding back to **8-bit ASCII** would fail
    
*   Output could become corrupted or undecodable
    

📌 **Base64 must decode back to original data perfectly**, so it always pads to **24 bits**, not just 6.

➡️ Why Padding Zeros Are Added on the Right?
--------------------------------------------

*   Binary data is processed **left → right**
    
*   Adding zeros on the right preserves the **original bit order**
    
*   Padding on the left would **change numeric meaning**
    

📌 This is a **design choice**, not a mathematical limitation(Hex & octal don’t decode back to original binary, Base64 does)

🧠 Data Zeros vs Padding Zeros (Very Important)
-----------------------------------------------

### Common Confusion:

> How does Base64 know the difference between:

*   real 000000 data
    
*   padded 000000 bits?
    

### The Answer:

🔑 **The = symbol is NOT part of Base64 data encoding**

### Rules:

1.  000000 **always encodes to A**
    
2.  \= **never comes from binary**
    
3.  \= is added **separately as metadata**
    

### Example: "abcd"

*   "abc" → full 3 bytes → encoded normally
    
*   "d" → only 1 byte → missing 2 bytes → == added
    

➡️ Decoder sees = and knows:

> “Ignore padded bits, don’t convert them to data”

🔄 Encoding Flow (Simple)
-------------------------

1.  Input string → UTF-8 binary
    
2.  Binary grouped into **24-bit blocks**
    
3.  Split into **6-bit chunks**
    
4.  Each chunk mapped to Base64 table
    
5.  Padding (=) added if needed
    

🧵 TL;DR
-------------------------

| Feature            | Value                          |
|--------------------|--------------------------------|
| Purpose            | Binary → Text                  |
| Total Characters   | 64                             |
| Bits per Character | 6                              |
| Block Size         | 24 bits (3 bytes)              |
| Padding Symbol     | =                              |
| Padding Meaning    | Metadata (not data)            |
| Used In            | Emails, URLs, APIs, JSON       |
| Encoding Type      | Reversible (lossless)          |
