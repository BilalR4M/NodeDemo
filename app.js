console.log("Hello World");

//read file 
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//write file
const fs = require('fs');
fs.writeFile('file.txt', 'Hello World', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 

//web server 

const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

const https = require('https'); 
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => { 
  let data = ''; 
 
  resp.on('data', (chunk) => { 
    data += chunk; 
  }); 
 
  resp.on('end', () => { 
    console.log(JSON.parse(data)); 
  }); 
}).on('error', (err) => { 
  console.log("Error: " + err.message); 
}); 

const myModule = require('./my-module.js'); 
console.log(myModule.myFunction()); 

// my promise
const myPromise = new Promise((resolve, reject) => { 
    if (condition) { 
      resolve('Success!'); 
    } else { 
      reject('Failure!'); 
    } 
  }); 
   
  myPromise.then((result) => { 
    console.log(result); 
  }).catch((error) => { 
    console.log(error); 
  }); 