🎯 Typed Arrays in JavaScript (Crisp Notes)
===========================================

🧱 What are Typed Arrays?
-------------------------

*   **Typed Arrays** allow us to work directly with **binary data**.
    
*   They are **array-like objects** backed by an **ArrayBuffer**.
    
*   They are **fast, memory-efficient**, and **type-specific**.
    

📌 **Difference from DataView**

*   **DataView** → Full low-level byte control (read/write any type at any offset).
    
*   **Typed Arrays** → Fixed data type per array (simpler and faster).
    
*   There is **NO single TypedArray constructor** like DataView.
    
    *   Each typed array has its **own constructor**.
        

🧪 Types of Typed Arrays
------------------------

### 🔢 Signed Integers

*   Int8Array
    
*   Int16Array
    
*   Int32Array
    
*   BigInt64Array
    

### 🔢 Unsigned Integers

*   Uint8Array
    
*   Uint16Array
    
*   Uint32Array
    
*   BigUint64Array
    

### 🧮 Clamped Integers

| Input Value | Stored Value | Reason |
|------------|--------------|--------|
| -50        | 0            | Values below 0 are clamped to 0 |
| 0          | 0            | Minimum allowed value |
| 100        | 100          | Within range (0–255) |
| 255        | 255          | Maximum allowed value |
| 260        | 255          | Values above 255 are clamped to 255 |
| 300        | 255          | Above max → clamped |
| 128.7      | 129          | Rounded to nearest integer |
| 128.4      | 128          | Rounded to nearest integer |
| NaN        | 0            | Invalid number → 0 |
| Infinity   | 255          | Clamped to max |
| -Infinity  | 0            | Clamped to min |


    

### 🌊 Floating Point Numbers

*   Float32Array
    
*   Float64Array
    

📏 Size Representation (Very Important)
---------------------------------------

| Type Size | Size per element |
|----------|------------------|
| 8-bit    | 1 byte           |
| 16-bit   | 2 bytes          |
| 32-bit   | 4 bytes          |
| 64-bit   | 8 bytes          |

📌 Example:

*   Int8Array → 1 byte per element
    
*   Int32Array → 4 bytes per element
    

🛠️ Ways to Create Typed Arrays
-------------------------------

### 1️⃣ From an existing ArrayBuffer

```javascript
   const buffer = new ArrayBuffer(3);  
   const u8 = new Uint8Array(buffer);   
```

### 2️⃣ By specifying size

```javascript
   const u8 = new Uint8Array(4);  // Creates [0, 0, 0, 0]   
```

📌 Default values are **0**

### 3️⃣ From an array of values

```javascript
   const u8 = new Uint8Array([0xfe, 0x53, 0xde, 0x99]);   
```

### 4️⃣ Create and fill with same value

```javascript
   const u8 = new Uint8Array(4).fill(7);  // [7, 7, 7, 7]   
```

📌 Same value is stored in **all elements**

⚙️ Features of Typed Arrays
---------------------------

✅ Behave like normal arrays

*   .length
    
*   .map()
    
*   .forEach()
    
*   .slice()
    

⚠️ **Fixed size**

*   You **cannot resize** a typed array after creation.
    

✅ **Only numbers allowed**

*   Integers or floats (depends on the type).
    

✅ **Type-safe**

*   Example: Uint8Array can only store values 0–255.
    

🧩 ArrayBuffer Important Concepts
---------------------------------

### 🔄 Resizable ArrayBuffer

```javascript
   const buffer = new ArrayBuffer(4, { maxByteLength: 10 });   
```

*   Default resizable = false
    
*   maxByteLength allows resizing later
    

### 🔌 Detached ArrayBuffer

*   When an ArrayBuffer is **transferred**, it becomes **detached**
    
*   Detached buffer = unusable (length becomes 0)
    

```javascript
const a = new ArrayBuffer(4);
const b = a.transfer(); 
// `a` is now detached
   
```
    
📌 Final Summary
----------------

*   🧱 **ArrayBuffer** → Raw memory
    
*   👁️ **TypedArray** → Typed view over ArrayBuffer
    
*   🎯 **DataView** → Full low-level control
    
*   🚀 Typed Arrays are **fast, fixed-size, and type-specific**
    
*   🧠 Use:
    
    *   **TypedArray** → Performance & simplicity
        
    *   **DataView** → Precise byte-level control