🧠 Writing Multi-Byte Data in ArrayBuffer (JavaScript)
======================================================

To work with raw binary data in JS, we use:

*   **ArrayBuffer** → raw memory
    
*   **DataView** → read/write values into that memory
    

1️⃣ Writing 8-Bit Data (1 Byte)
-------------------------------

### ✅ .setInt8()

*   Stores **signed 8-bit integer**
    
*   **Range:** -128 to 127
    

```javascript
   view.setInt8(0, -50);   
```

### ✅ .setUint8()

*   Stores **unsigned 8-bit integer**
    
*   **Range:** 0 to 255
    

```javascript
   view.setUint8(1, 200);   
```

❌ **Limitation**

*   Can store **only 1 byte (8 bits)**
    
*   Cannot store large numbers like 260
    

2️⃣ Writing 16-Bit Data (2 Bytes)
---------------------------------

### ✅ .setInt16()

*   Stores **signed 16-bit integer**
    
*   **Range:** -32,768 to 32,767
    

### ✅ .setUint16()

*   Stores **unsigned 16-bit integer**
    
*   **Range:** 0 to 65,535
    

### 🛠 Syntax

```javascript
   view.setInt16(byteOffset, value, littleEndian?)   
```

Example:

```javascript
   view.setInt16(0, 260);   
```

3️⃣ Endianness (Byte Order)
---------------------------

> Endianness decides **how bytes are stored in memory**

### 🔹 Big Endian (Default)

*   **Most Significant Byte first**
    
*   littleEndian = false or omitted
    

```javascript
   view.setInt16(0, 260); // Big Endian   
```

### 🔹 Little Endian

*   **Least Significant Byte first**
    
*   Pass true as 3rd argument
    

```javascript
   view.setInt16(0, 260, true);   
```

⚠️ **Important**

*   Endian option exists **only for multi-byte methods** (16-bit, 32-bit)
    
*   Not needed for Int8 / Uint8
    

4️⃣ Reading 16-Bit Data
-----------------------

### ✅ .getInt16()

```javascript
view.getInt16(0);        // Big Endian
view.getInt16(0, true); // Little Endian
  
```

🔁 **Rule:** 👉 Endianness used while reading **must match** the one used while writing

5️⃣ Writing 32-Bit Data (4 Bytes)
---------------------------------

### ✅ .setInt32() / .setUint32()

*   Stores **32-bit integers**
    
*   Uses **4 bytes**
    
*   Endianness works the same as Int16
    

```javascript
   view.setInt32(0, 100000, true);   
```

6️⃣ Quick Comparison Table
--------------------------

| Method        | Bytes | Signed | Range                     |
|--------------|-------|--------|---------------------------|
| setInt8      | 1     | ✅     | -128 to 127               |
| setUint8     | 1     | ❌     | 0 to 255                  |
| setInt16     | 2     | ✅     | -32,768 to 32,767         |
| setUint16    | 2     | ❌     | 0 to 65,535               |
| setInt32     | 4     | ✅     | Large values              |
| setUint32    | 4     | ❌     | Very large values         |


7️⃣ Node.js Special Note 🟢
---------------------------

*   Node.js systems are **Little Endian internally**
    
*   ❗ DataView methods still default to **Big Endian**
    
*   Always pass true if you want Little Endian
    

```javascript
   view.setInt16(0, 500, true);   
```

🔑 Key Takeaways
------------------------------------

*   Int8 → **1 byte**, no endian
    
*   Int16 / Int32 → **multi-byte**, endian matters
    
*   Default endian = **Big Endian**
    
*   Little Endian = **pass true**
    
*   Read & write endian **must match**