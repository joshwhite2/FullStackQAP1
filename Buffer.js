/*
Buffers

Buffers are used in node to work with binary data directly and to represent a fixed-length sequence. Buffers act like containers for binary data, we can imagine them as an array of bytes, where each byte can store a value from 0 to 255.

Buffers are essential for handling raw binary data efficiently in Node.js applications, especially when working with I/O operations, encryption, or network communication.

When converting between Buffers and strings, a character encoding may be specified. If no character encoding is specified, UTF-8 will be used as the default.
*/

//EXAMPLE 1
// Create a buffer to store a string
const buffer = Buffer.alloc(11); // Creates a buffer of 11 bytes with all values initialized to 0

// Fill the buffer with data using buffer.write(string, offset, length, encoding)

buffer.write('Hello',0, 5, 'utf-8'); //utf-8 is the character encoding used to write string data into the buffer

// Read from the buffer

const data = buffer.toString('utf-8'); 
//console.log(data); // Output: Hello

// Manipulate the buffer
buffer.write(' World', 5, 6, 'utf-8'); // Write ' World' starting from the 6th byte
const newData = buffer.toString('utf-8'); 
console.log(newData); // Output: Hello World

//EXAMPLE 2

// Create a buffer to store binary data as a string
const buffer2 = Buffer.from([ 0x44, 0x6F, 0x6E, 0x27, 0x74, 0x20, 0x62, 0x75,
    0x73, 0x74, 0x20, 0x6D, 0x79, 0x20, 0x62, 0x75,
    0x66, 0x66, 0x65, 0x72, 0x73]); // Hex values representing 'Don't bust my buffers'

// Convert the buffer to a string
const text = buffer2.toString('utf-8');

console.log(text); 

