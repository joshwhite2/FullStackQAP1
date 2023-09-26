/*
In Node, the URL object is used to parse, format and manipulate URLs.

URL object properties and methods include;
    protocol: The protocol or scheme of the URL (e.g., 'https:').

    hostname: The hostname of the URL (e.g., 'www.example.com').

    port: The port number of the URL (e.g., '8080').

    pathname: The path portion of the URL (e.g., '/path').

    searchParams: An object representing the query parameters of the URL. You can use methods like set(), get(), has(), and others to work with query parameters.

  The url module simplifies the handling of URLs in Node.js applications, making it easier to work with web addresses and related data.


*/

//EXAMPLE 1- Parsing a URL

const url = require('url');

const urlString = 'https://www.example.com:8080/path?param1=value1&param2=value2#fragment';

const parsedUrl = url.parse(urlString, true);

console.log('Protocol:', parsedUrl.protocol); // Output: 'https:'
console.log('Host:', parsedUrl.host); // Output: 'www.example.com:8080'
console.log('Path:', parsedUrl.pathname); // Output: '/path'
console.log('Query:', parsedUrl.query); // Output: { param1: 'value1', param2: 'value2' }
console.log('Fragment:', parsedUrl.hash); // Output: '#fragment'

//EXAMPLE 2 CREATING A URL


//Create a URL object from a string
const urlString2 = 'https://www.example.com:8080/path?param1=value1';
const url = new URL(urlString2);

// Access properties of the URL object
console.log('Protocol:', url.protocol); // Output: 'https:'
console.log('Hostname:', url.hostname); // Output: 'www.example.com'
console.log('Port:', url.port); // Output: '8080'
console.log('Pathname:', url.pathname); // Output: '/path'

// Manipulate query parameters
url.searchParams.set('param2', 'value2');

// Get the updated URL as a string
const updatedUrlString = url.href;
console.log('Updated URL:', updatedUrlString);


