console.log("Hello World");
//Asynchronous Statement

//The fetch API allows to asynchronously request for a resource(data)
console.log(fetch('https://jsonplaceholder.typicode.com/posts'));

console.log("Goodbye");

fetch('https://jsonplaceholder.typicode.com/posts').then(response => console.log(response.status));

//Retrieve contents/data from the "Response" object
fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then((json) => console.log(json));