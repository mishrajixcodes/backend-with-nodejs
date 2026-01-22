1️⃣ Core Rule (Most Important)
------------------------------

In **Node.js**, **only module.exports is actually returned by require()**.

exports is **just a reference (shortcut)** to module.exports.

```javascript
   console.log(module.exports === exports); // true   
```

At the beginning, **both point to the same object**.

2️⃣ Understanding with Your address Example
-------------------------------------------

```javascript
   const user = {      name: "Aman Mishra",      age: 88,      address: {          city: "Mumbai",          state: "Maharashtra"      },      hobbies: ["Sleeping", "Coding", "Eating"]  }; 
    let address = user.address;   
   ```

### Why is this true?

```javascript
   console.log(user.address === address); // true   
   ```

Because:

*   address does **not create a copy**
    
*   It stores a **reference to the same object in memory**
    

📌 **Both variables point to the same address object**

3️⃣ Modifying the Object (Reference Behavior)
---------------------------------------------

```javascript
   address.pincode = 40111;  address.country = "India";   
   ```

Now:

```javascript
   console.log(user.address);   
```

✔ user.address **also changes**

Why?

> Because both address and user.address point to the **same object**

4️⃣ Reassigning the Variable (Reference Breaks)
-----------------------------------------------

```javascript
   address = {      pincode: 5680,      country: "USA"  };  
   console.log(address);  
   console.log(user.address);   
   ```

### Output Conceptually:

*   address → new object
    
*   user.address → old object (unchanged)
    

💡 **Reassignment creates a NEW object**💡 **Original reference is NOT affected**

5️⃣ Same Concept Applies to exports
-----------------------------------

Internally, Node.js does something like this:

```javascript
  let exports = module.exports;   
```

So initially:

```javascript   
module.exports === exports // true   
```


6️⃣ This Works ✅ (Mutating the Object)
--------------------------------------

```javascript
   const product = { name: "Laptop", price: 50000 };  let send = module.exports;  send.product = product;   
```

Why does this work?

*   You are **modifying the same object**
    
*   module.exports still points to it
    

7️⃣ Where the Problem Comes ❌ (Reassignment)
--------------------------------------------

❌ **THIS IS WRONG**

```javascript
   exports = { sum, products };   
   ```

### Why this breaks?

Because:

*   You are **reassigning exports**
    
*   module.exports is still pointing to {}
    

📌 Now:

```javascript
   exports !== module.exports   
   ```

📌 require() only reads **module.exports**📌 So it gets an **empty object {}**

8️⃣ Correct Ways to Export
--------------------------

### ✅ Best & Safest (Recommended)

```javascript
   module.exports = { sum, products };   
   ```

### ✅ Also Safe (Property-wise)

```javascript
  exports.sum = sum;  exports.products = products;   
```


### ❌ Never Do This

```javascript
   exports = { sum, products }; // ❌ breaks reference   
   ```

9️⃣ One-Line Summary (Exam / Interview Ready)
---------------------------------------------

> exports is just a reference to module.exports.Mutating works, reassignment breaks.require() only returns module.exports.