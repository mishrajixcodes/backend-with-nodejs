✳️ Character Set vs Character Encoding 📘
-----------------------------------------

### 🔹 Character Set

A **Character Set** is a defined collection of characters along with a unique number (code point) assigned to each character.It specifies **which characters exist**, such as letters, digits, symbols, and control characters.

#### ✅ Common Character Sets:

**1\. ASCII (American Standard Code for Information Interchange)**

*   Contains **128 characters**
    
*   Uses **7 bits**
    
*   Calculation: 2⁷ = 128
    
*   Includes:
    
    *   Uppercase letters (A–Z)
        
    *   Lowercase letters (a–z)
        
    *   Digits (0–9)
        
    *   Punctuation symbols
        
    *   Control characters (newline, tab, etc.)
        

**2\. Unicode**

*   Universal character set
    
*   Can represent **over 1.1 million characters**
    
*   Supports:
    
    *   All major world languages
        
    *   Mathematical symbols
        
    *   Emojis
        
    *   Special symbols
        
*   Does **not** define how characters are stored in memory (only assigns code points)
    

### 🔹 Character Encoding

**Character Encoding** defines **how characters from a character set are stored as binary data (0s and 1s)** in memory or transmitted over a network.It is the **implementation** of a character set.

#### 🧾 Common Encodings:

**1\. ASCII Encoding**

*   Encodes only ASCII character set
    
*   Uses **7 bits per character**
    
*   One-to-one mapping between character and binary value
    

**2\. UTF-8 (Unicode Transformation Format – 8 bit)**

*   Encoding for Unicode
    
*   Uses **1 to 4 bytes** (variable-length)
    
*   First **128 characters are identical to ASCII**
    
*   Most widely used encoding on the web (HTML, databases, APIs)
    

### 🔸 Key Differences (Summary)

| Character Set | Character Encoding |
|--------------|------------------|
| Defines **what** characters exist | Defines **how** characters are stored |
| Assigns code points | Converts code points into bytes |
| Example: ASCII, Unicode | Example: ASCII encoding, UTF-8 |
| Abstract concept | Practical implementation |


### 🧠 In Simple Words

*   **Character Set** → _List of characters_
    
*   **Character Encoding** → _Binary representation of those characters_