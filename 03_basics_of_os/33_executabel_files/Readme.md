Types of Executable Files
-------------------------

Executable files are programs that can be run directly by the operating system. There are **two main types of executable files**:

1\. Executable Script Files
---------------------------

Executable scripts are **human-readable text files** that contain commands written for an interpreter such as **Bash, Python, or Node.js**.

### How Execution Works

*   The terminal reads the file as **plain text**.
    
*   The interpreter (specified using a _shebang_) executes the commands line by line.
    
*   If the content contains invalid commands, an error is shown.
    

### Execution Method

Scripts can be run from the terminal using:

`   ./filename   `

### Example

`   # script.sh  npm --version   # Output: 10.8.2  hello           # Error: hello: command not found   `

### Permissions

*   On Linux/Unix systems, the file must have **execute permission**:
    

`   chmod +x script.sh   `

### File Extensions

*   Extensions are **not mandatory**, but recommended for clarity:
    
    *   .sh → Bash script
        
    *   .py → Python script
        
    *   .js → Node.js script
        

2\. Binary Executable Files
---------------------------

Binary executables are **compiled programs** that contain **machine-level instructions** directly understood by the CPU. These files are **not human-readable**.

### How Execution Works

*   The operating system loads the binary into memory.
    
*   The CPU executes the instructions directly.
    

### Execution Method

`   ./my_program   `

or using the full path:

`   /path/to/my_program   `

### Example

`   ./my_program   # Runs a compiled binary   `

### Permissions

*   Like scripts, binary executables also require execute permission:
    

`   chmod +x my_program   `

### File Extensions

*   **Unix/Linux**: Usually **no extension**
    
    *   Example: /bin/ls
        
*   **Windows**: Uses extensions such as
    
    *   .exe (executable)
        
    *   .dll (dynamic link library)
        

Summary Table
-------------

| Feature | Script Executables | Binary Executables |
|--------|-------------------|------------------|
| Readable | Yes | No |
| Needs Interpreter | Yes | No |
| Compilation Required | No | Yes |
| Execution Speed | Slower | Faster |
| Examples | `.sh`, `.py`, `.js` | `ls`, `gcc`, `.exe` |
