What does npx do?
-----------------

**npx is a tool that runs Node.js package executables without you needing to install them globally.**

In short:

> **npx finds a command (binary) and executes it.**

It does **NOT** search random files.It only runs **executables defined by npm packages** (via the bin field).

Why npx exists
--------------

Before npx, you had two options:

*   Install packages **globally** (npm install -g)
    
*   Or run long paths like ./node\_modules/.bin/package
    

npx solves this by:

*   Automatically finding the binary
    
*   Downloading it **temporarily if needed**
    
*   Running it **once**
    

What happens when you type:
---------------------------

```bash
   npx hello   
```

Step-by-step: How npx works
---------------------------

### **Step 1: Check local project binaries**

npx first looks inside your current project:

```text
   ./node_modules/.bin/hello   
```

✔ If found → **execute it immediately**✔ No download required

### **Step 2: Check npm cache**

If the binary is **not found locally**, npx checks:

```text
   npm cache   
```

✔ If hello was downloaded earlier → **reuse it**

### **Step 3: Download from npm registry**

If not in cache, npx:

*   Downloads the **hello package** from the npm registry
    
*   Stores it in a **temporary location**
    
*   Does **NOT** add it to package.json
    
*   Does **NOT** install it permanently
    

### **Step 4: Read package.json → bin**

After the package is available, npx:

*   Reads the package’s package.json
    
*   Looks for the bin field
    

Example:

```json
  {
  "name": "hello",
  "bin": {
    "hello": "./app.xyz"
  }
}
 ```

This tells npm:

> When someone runs hello, execute app.xyz

### **Step 5: Execute the binary**

npx now executes the file mapped in bin.

If it’s a script file, it must contain a **shebang**:

```text
   #!/usr/bin/env node   
   ```

This is why **you write a shebang** — so the OS knows how to execute it.

Here is the **correct and simplified resolution order**:

  | Step | Stage                         | What happens |
|-----:|-------------------------------|--------------|
| 1    | `./node_modules/.bin/hello`   | npx checks for the binary in the local project and executes it if found |
| 2    | npm cache                     | npx looks in the npm cache for a previously downloaded copy |
| 3    | npm registry                  | If not cached, npx downloads the package temporarily from the npm registry |
| 4    | `package.json → bin`          | npx reads the `bin` field to determine which file should be executed |
| 5    | Execute binary                | npx runs the resolved binary (shebang is required for scripts) |


## Executable vs Library 

`npx` **only runs executable files**, not libraries.

An npm package is executable **only if it defines a `bin` field** in its `package.json`.

### Examples

- **Vite**
  - Has a `bin` field
  - Exposes a command (`vite`)
  - ✅ Works with `npx`

- **Express**
  - Library only
  - No `bin` field
  - ❌ Cannot be executed with `npx`

> `npx` cannot run a package unless it exposes an executable via `bin`.

---

## npx Caching Behavior

When you run:

```bash
npx hello
```

### What happens

*   The package is downloaded (if not already available)
    
*   It is stored in the **npx temporary cache**
    
*   ~/.npm/\_npx/
    

### Cache characteristics

*   ✅ May be reused in future runs
    
*   ❌ Not added to package.json
    
*   ❌ Not installed as a project dependency
    
*   ❌ Not installed globally
    

Modern Node.js: npm exec
------------------------

In modern versions of Node.js and npm, **npm exec** is the officially recommended command.

### Usage

```bash
   npm exec vite   
```

### Key points

*   npm exec and npx behave similarly
    
*   Both run **executables**, not libraries
    
*   The package **must** expose a bin field
    
*   npm exec does **not** automatically run libraries
    

> In modern Node.js, npm exec is the recommended replacement for npx, but both require the package to be executable.
