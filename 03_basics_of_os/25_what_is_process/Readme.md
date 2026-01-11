1\. Process
-----------

### Definition

A **process** is a running program, which can be an application or a background task.It is the **basic unit of execution** handled by the CPU.

2\. Key Properties of a Process
-------------------------------

Each process has the following properties:

*   **Uses RAM (Memory)** to store data and instructions
    
*   **Consumes CPU time** for execution
    
*   **PID (Process ID)** – unique identifier of the process
    
*   **PPID (Parent Process ID)** – ID of the process that created it
    

3\. Process States
------------------

A process can exist in different states during its lifecycle:

*   **Ready** – Process is ready and waiting for CPU allocation
    
*   **Running** – Process is currently executing on the CPU
    
*   **Waiting (Blocked)** – Process is waiting for an external event (I/O, file read, network response)
    
*   **Sleep** – Process is idle until a specific trigger occurs (e.g., server waiting for requests)
    
*   **Terminated** – Process has completed execution and exited
    

4\. Tools to View Processes
---------------------------

Different operating systems provide tools to monitor running processes:

*   **Windows** → Task Manager
    
*   **macOS** → Activity Monitor (shows per-core CPU usage)
    
*   **Advanced Tools**
    
    *   Process Explorer
        
    *   System Informer
        

These tools help analyze CPU usage, memory consumption, and parent-child process relationships.

5\. Context Switching
---------------------

**Context switching** is the process of switching CPU execution from one process to another.

*   Happens **millions of times per second**
    
*   Allows multiple processes to share the CPU efficiently
    
*   CPU saves the state of the current process and loads the next one
    

6\. Process in Node.js
----------------------

When you run:

```bash
   node app.js   
```
A **new OS-level process** is created.

Each Node.js process has:

*   pid → its own process ID
    
*   ppid → parent process ID (Terminal, VS Code, Explorer, etc.)
    

Example:

```javascript
console.log(process.pid);    // Process ID
console.log(process.ppid);   // Parent Process ID
console.log(process.env);    // Environment variables
```

### CPU Usage Example

*   An **infinite loop** in Node.js will fully occupy **one CPU core**
    
*   On a **12-core system**, this equals roughly **8.3% CPU usage**
    
*   Running **multiple Node.js processes** allows CPU usage to scale across multiple cores
    

7\. Node.js Single-Threaded Model
---------------------------------

Node.js is **fundamentally single-threaded**, meaning:

*   JavaScript code runs on **one main thread**
    
*   This is because the **V8 JavaScript engine** is single-threaded
    

However, Node.js can still handle many concurrent operations efficiently.

8\. Role of Libuv
-----------------

### What is Libuv?

**Libuv** is a **multi-platform support library** used internally by Node.js.

🔗 Official link: [https://libuv.org/](https://libuv.org/)

### Why Libuv is Important

Libuv is responsible for handling:

*   File system operations
    
*   Network requests
    
*   DNS lookups
    
*   Timers
    
*   Other asynchronous I/O tasks
    

It communicates with **background OS threads** to execute these tasks efficiently.

### How Libuv Works

*   Node.js sends asynchronous tasks to **Libuv**
    
*   Libuv uses **pre-existing OS threads or its own worker thread pool**
    
*   Once the task is completed, the result is sent back to Node.js
    
*   This prevents the **Node.js call stack** from getting blocked
    

### Simple Explanation

> **Libuv acts as a middle layer between Node.js and the operating system, managing background work so that the main JavaScript thread remains non-blocking.**

9\. Event Loop + Libuv
----------------------

*   The **Event Loop** manages callbacks and task execution
    
*   **Libuv handles async I/O operations**
    
*   Together, they allow Node.js to:
    
    *   Handle thousands of concurrent connections
        
    *   Maintain high performance
        
    *   Work efficiently despite single-threaded execution