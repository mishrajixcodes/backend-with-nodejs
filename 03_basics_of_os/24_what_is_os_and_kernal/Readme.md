# How an Operating System Runs Multiple Applications

When multiple applications such as a **browser, VS Code, Excel, and a clock app** are open at the same time, the **Operating System (OS)** does not actually run all of them continuously.

Instead, the OS **rapidly switches the CPU’s execution** between applications.

Even if an application appears to be running all the time, it only receives **processor time in very short bursts**.  
This switching happens so quickly that it creates the **illusion of simultaneous execution**, even on systems with limited CPU cores.

---

## Key Concepts

### 1. Resource Allocation
Resource allocation is the process by which the OS decides how much **CPU time, RAM, disk space, and I/O access** each application (process) receives.

This ensures:
- Fair usage of system resources
- System stability
- No single process dominates the CPU

---

### 2. Context Switching
A **context switch** occurs when the OS:
1. Saves the state of the currently running process
2. Loads the state of another process into the CPU

This allows multiple applications to share the CPU efficiently and appear to run at the same time.

---

### 3. Kernel
The **kernel** is the core, low-level component of the operating system that always remains active in memory.

It is responsible for:
- CPU scheduling
- Memory management
- Device and I/O control
- Handling system calls

The kernel acts as the **bridge between hardware and software**.

---

### 4. Process
A **process** is an instance of a program that is currently running.

Each open application (browser, editor, Excel) runs as one or more processes managed by the OS.

---

## Quick Points

- The **OS is not a typical application**; it manages all hardware resources.
- The **kernel** is the hardware-controlling part of the OS.
- **Context switching** enables multiple apps to run on limited CPU cores.
- Core responsibilities of an OS include:
  - CPU management
  - Memory (RAM) management
  - Disk and I/O handling
  - Providing interfaces for applications

---

## One-Line Memory Trick

> **OS = Manager**  
> **Kernel = Controller**  
> **Process = Worker**  
> **Context Switch = CPU Handover**
