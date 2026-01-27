Differences Between CommonJS (CJS) and ES6 / ES Modules (ESM) in Node.js
========================================================================

1\. Loading & Execution Model
-----------------------------

| Aspect | CommonJS (CJS) | ES Modules (ESM) |
|------|---------------|-----------------|
| Module loading | **Synchronous** (`require`) | **Asynchronous module resolution** (`import`) |
| Thread behavior | Blocks the main thread while loading | Module graph is resolved asynchronously, improving startup |
| Code execution | Main thread | Main thread |
| Event loop impact | Can block for large modules | Better for large apps & servers |


✅ **Correction:**ESM does **not fully run on a separate thread**, but **module resolution & linking are async**, which is why it feels non-blocking.

2\. Import Syntax & Hoisting
----------------------------

| Aspect | CommonJS (CJS) | ES Modules (ESM) |
|------|---------------|-----------------|
| Import style | `const x = require('./file')` | `import x from './file.js'` |
| Hoisting | ❌ Not hoisted | ✅ Hoisted |
| Execution order | Runs where `require` is written | Imports run **before** file code |


✅ import statements are always evaluated first, even if written at the bottom.

3\. File Extensions & Configuration
-----------------------------------

| Aspect | CommonJS (CJS) | ES Modules (ESM) |
|------|---------------|-----------------|
| Default in Node.js | ✅ Yes | ❌ No |
| `package.json` config | Optional (`"type": "commonjs"`) | Required (`"type": "module"`) |
| File extension | Optional | **Mandatory** |
| Common extensions | `.js`, `.cjs` | `.mjs`, `.js` (with `"type": "module"`) |


❗ **Correction:**ESM **can load .js files** if "type": "module" is set.It is **not limited to only .mjs**.

4\. What Files Can Be Loaded
----------------------------

| Aspect | CommonJS (CJS) | ES Modules (ESM) |
|------|---------------|-----------------|
| Load non-JS files | ✅ Possible (JSON, native addons, etc.) | ❌ Mostly JS-only |
| JSON import | ✅ `require('./data.json')` | ❌ Needs assertion or workaround |
| Dynamic loading | `require()` | `import()` |


✅ CommonJS is more flexible but less strict.

5\. Exports & Imports
---------------------

### CommonJS

```javascript
   module.exports = {    add,    subtract  };   
   ```

### ES Modules

```javascript
   export function add() {} 
    export function subtract() {} 
     export default add;   
```

| Aspect | CommonJS (CJS) | ES Modules (ESM) |
|------|---------------|-----------------|
| Export model | Single export object | Multiple named exports + one default export |
| Import flexibility | Limited | Very powerful |


6\. this, Strict Mode & Metadata
--------------------------------

| Aspect | CommonJS (CJS) | ES Modules (ESM) |
|------|---------------|-----------------|
| Strict mode | ❌ Not enabled by default | ✅ Always enabled |
| Top-level `this` | `module.exports` | `undefined` |
| File metadata | `__filename`, `__dirname` | `import.meta.url` |


7\. Top-Level await
-------------------

| Aspect | CommonJS (CJS) | ES Modules (ESM) |
|------|---------------|-----------------|
| Top-level `await` | ❌ Not allowed | ✅ Allowed |
| Workaround | Async IIFE | Not needed |


```javascript 
  // ESM  await fetchData();   
```

8\. Summary (Corrected Checklist)
---------------------------------

### ✅ CommonJS (CJS)

*   Synchronous loading
    
*   Imports are **not hoisted**
    
*   No top-level await
    
*   Single export object
    
*   Strict mode ❌ (manual)
    
*   File extension optional
    
*   Can load many file types
    
*   .js (default), .cjs
    
*   "type": "commonjs" optional
    
*   this === module.exports
    

### ✅ ES Modules (ESM)

*   Asynchronous module resolution
    
*   Imports are **hoisted**
    
*   Top-level await supported
    
*   Multiple named + default exports
    
*   Strict mode ✅ by default
    
*   File extension **mandatory**
    
*   Mostly JS files only
    
*   .mjs or .js with "type": "module"
    
*   "type": "module" required
    
*   this === undefined