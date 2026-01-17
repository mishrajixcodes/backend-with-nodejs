File Permissions in Linux/Unix
==============================

Basic Permissions
-----------------

*   **Read (r)**
    
    *   Permission to read the contents of a file
        
    *   Permission to list the contents of a directory
        
*   **Write (w)**
    
    *   Permission to modify or delete a file
        
    *   Permission to add or remove files in a directory
        
*   **Execute (x)**
    
    *   Permission to execute a file (script or binary)
        
    *   Permission to access a directory and its contents
        

File Permission Representation
------------------------------

*   File permissions are represented by a **string of 10 characters**
    

### File Type (1st Character)

*   \- : Regular file
    
*   d : Directory
    
*   l : Symbolic link
    

### Permission Bits (Next 9 Characters)

Divided into **three sets**:

1.  **Owner permissions** (characters 2–4)
    
2.  **Group permissions** (characters 5–7)
    
3.  **Others permissions** (characters 8–10)
    

Each set contains:

*   r → read
    
*   w → write
    
*   x → execute
    
*   \- → permission not granted
    

Examples
--------

L`   -rw-r--r-- 1 psame psame 197609 882 Jul 19 2024 create_hostel.sql   `

*   \- → Regular file
    

`   drwxr-xr-x 1 psame psame 197609 0 Sep 11 2024 AndroidStudioProjects/   `

*   d → Directory
    

ML`   lrwxrwxrwx 1 psame psame 197609 30 Jan 15 2025 Application Data -> /c/Users/psame/AppData/Roaming/   `

*   l → Symbolic link (points to another file or directory)
    

Viewing File Permissions
------------------------

Use:

`   ls -l   `

Example output:

`   -rw-r--r-- 1 psame psame 197609 2007 Dec 23 13:13 filePermission.js   `

### Breakdown

*   \-rw-r--r-- → Permission string
    
*   1 → Number of hard links
    
*   psame → File owner
    
*   psame → Group owner
    
*   197609 → Group ID
    
*   2007 → File size (bytes)
    
*   Dec 23 13:13 → Last modified date & time
    
*   filePermission.js → File name
    

Changing File Permissions (chmod)
---------------------------------

### Syntax

`   chmod [options] mode file   `

### Examples

ML`   chmod +x script.sh   `

Adds execute permission to the owner.

`   chmod 755 script.sh   `

Sets permissions to rwxr-xr-x.

Numeric Representation of Permissions
-------------------------------------

Each permission has a numeric value:

*   r = 4
    
*   w = 2
    
*   x = 1
    

Add values for each set.

### Example: 755

*   Owner: 7 → rwx
    
*   Group: 5 → r-x
    
*   Others: 5 → r-x
    

**Permission string:**

`   rwxr-xr-x   `

Check Permissions (Symbolic + Numeric)
--------------------------------------

`   stat -c "%A %a %n" filePermission.js   `

Example output:

`   -rw-r--r-- 755 filePermission.js   `

Special Permissions
-------------------

*   **Setuid (s)**
    
    *   Executable runs with the permissions of the file owner
        
*   **Setgid (s)**
    
    *   Files created in a directory inherit the group ownership
        
*   **Sticky bit (t)**
    
    *   Only the file owner, directory owner, or root can delete files
        

Disk Space Allocation
---------------------

*   Directory: **4 KB (4096 bytes)**
    
*   File: **1 KB**
    

> Allocated space is not always equal to actual file size.

chmod with Symbols
------------------

`   chmod -x ./src   `

Removes execute permission for owner, group, and others.

`   chmod +x ./src   `

Adds execute permission for owner, group, and others.

`   chmod u+x,g+x,o+x ./src   `

Adds execute permission for user, group, and others.

`   chmod u-x,g-x,o-x ./src   `

Removes execute permission for all.

`   chmod u+r,g+r,o+r ./src   `

Adds read permission for all.

`   chmod u+r,u+w,u+x ./src   `

Adds read, write, and execute permissions for owner only.

Git File Permissions
--------------------

*   1000644 → Regular file (rw-r--r--)
    
*   1000755 → Executable file (rwxr-xr-x)
    
*   120000 → Symbolic link
    
*   040000 → Directory