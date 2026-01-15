An **environment variable** is a **key–value pair**, where both the key and value are stored as strings.

There are **three types of environment variables**:

1.  **System environment variables** – available to all users and processes in the system.
    
2.  **User environment variables** – available only to a specific user.
    
3.  **Process environment variables** – available only to a specific running process.
    

Normally, a **process uses environment variables** and can also **create its own environment variables** based on its needs.

When a process **creates another process** (for example, a parent process starting a child process), the **environment variables are passed from the parent process to the child process**.

There are also some **special environment variables** such as PATH, HOME, USER, etc.We can **override** the value of these variables or **append new values** to them (for example, adding a new directory to the PATH variable).