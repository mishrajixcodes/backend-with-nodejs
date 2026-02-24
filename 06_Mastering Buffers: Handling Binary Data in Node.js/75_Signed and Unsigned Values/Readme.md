🔁 Signed vs Unsigned Binary Numbers
---------------------------------------------------------------

### 📌 **Basics**

*   Computers store numbers in **binary (0s and 1s)**.
    
*   Binary by itself **does not indicate sign** (positive/negative).
    
*   **Signed** and **Unsigned** interpretation defines how bits are read.
    

🔢 **Unsigned Binary**
----------------------

*   Can represent **only non-negative numbers**.
    
*   **All bits** are used for magnitude (value).
    

**8-bit Unsigned Range**

*   **0 to 255**
    
*   Total values = **2⁸ = 256**
    

Example:

```bash
   11111111 = 255 (unsigned)   
```

🔁 **Signed Binary (Two’s Complement)**
---------------------------------------

*   Used to represent **both positive and negative numbers**.
    
*   **MSB (Most Significant Bit)** is the **sign bit**:
    
    *   0 → Positive
        
    *   1 → Negative
        

**8-bit Signed Range**

*   **\-128 to +127**
    
*   Still **256 total values**
    

🧮 **Two’s Complement (How Negatives Are Stored)**
--------------------------------------------------

To represent **\-X**:

1.  Write binary of **X**
    
2.  **Flip all bits** (1’s complement)
    
3.  **Add 1**
    

Example (8-bit):

```bash
 +5  = 00000101
Flip = 11111010
+1   = 11111011  → -5
```

So, **11111011 stores -5**

⚠️ **Important Observations**
-----------------------------

*   From **0 to 127**:
    
    *   Signed and Unsigned values are **same**
        
    *   MSB = 0
        
*   From **128 to 255**:
    
    *   Unsigned → 128 to 255
        
    *   Signed → -128 to -1
        

Example:

```bash
10000000
Unsigned = 128
Signed   = -128

```

➕ **Why Two’s Complement?**
---------------------------

*   **Simplifies hardware**
    
*   Same circuit handles **addition & subtraction**
    

Example:

```bash
   5 - 5 = 5 + (-5)

  00000101
+ 11111011
-----------
1 00000000  → discard carry → 00000000 (0)   
```

✅ No separate subtraction logic needed✅ Faster & efficient computation

🧠 **Key Points**
----------------------------------

*   Signedness depends on **how the data is interpreted**, not stored.
    
*   When creating **buffers / variables**, you must specify:
    
    *   **Signed** or **Unsigned**
        
*   Same binary → **different meaning** based on type.
    

📋 **Quick Comparison Table**
-----------------------------

| Feature     | Unsigned (8-bit) | Signed (8-bit) |
|------------|------------------|---------------|
| Range      | 0 to 255         | -128 to +127  |
| MSB        | Part of value    | Sign bit      |
| Negatives  | ❌ Not allowed   | ✅ Allowed    |
| Method     | Direct value     | Two’s Complement |



❓ What is the _real problem_ computers had?
-------------------------------------------

Computers only know **addition**.

Making **separate hardware** for:

*   addition
    
*   subtraction
    
*   negative numbers
    

would make the CPU **bigger, slower, and costly**.

👉 **Goal:**Use **ONE circuit** to do **everything**.

🔧 Without Two’s Complement (problem case)
------------------------------------------

Suppose we want:

```bash
   5 - 5   
```

Computer would need:

*   a subtraction circuit
    
*   logic to detect negative results
    
*   extra rules for borrow
    

❌ Complex❌ Slow❌ More hardware

🧠 Two’s Complement = Smart Trick
---------------------------------

Two’s complement converts **subtraction into addition**.

### Rule:

```bash
   A - B  ===  A + (-B)   
```

So:

```bash
   5 - 5  ===  5 + (-5)   
```

Now computer only needs **addition hardware** 🔥

🔢 Step-by-Step (VERY IMPORTANT)
--------------------------------

### Step 1: Write +5

```bash
   +5 = 00000101   
```

### Step 2: Store -5 using Two’s Complement

```bash
 +5  = 00000101
Flip = 11111010
+1   = 11111011   → -5
  
```

So:

```bash
   -5 = 11111011   
```

➕ Step 3: Add them
------------------

```bash
  00000101   (+5)
+ 11111011   (-5)
-----------
1 00000000
```

### What is this 1 on the left?

👉 It is a **carry (overflow) bit**

⚠️ CPU is working with **8 bits only**

So it **throws away** the extra bit.

Result:

```bash
   00000000 = 0   
```

🎯 **Correct answer without subtraction hardware!**

💡 WHY this works (key idea)
----------------------------

Two’s complement is designed so that:

```bash
   Number + its Two’s Complement = 0   
```

Just like:

```bash
   +5 + (-5) = 0   
```

But done in **binary + hardware-friendly way**.

🧩 Why discarding carry is OK?
------------------------------

Because:

*   CPU has **fixed bit size** (8, 16, 32, 64)
    
*   Extra bit does not fit
    
*   Two’s complement math **expects this overflow**
    

So discarding it is **part of the design**, not a bug.

⚡ Final Simple Summary
-----------------------------------

*   CPU only knows **addition**
    
*   Two’s complement allows:
    
    *   negative numbers
        
    *   subtraction using addition
        
*   Same circuit does:
    
    *   (+)
        
    *   (-)
        
*   Overflow bit is ignored
    
*   Result stays correct
    

🧠 One-line memory trick
------------------------

> **Two’s complement turns subtraction into addition, so CPUs stay simple and fast.**