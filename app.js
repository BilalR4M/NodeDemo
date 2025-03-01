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
