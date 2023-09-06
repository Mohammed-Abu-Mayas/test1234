// import * as fs from 'fs/promises';
// npm install @types/node
// node --experimental-modules storedb.js

const fs =require('fs/promises');
const express = require('express');
var app = express();
app.post('/testSms', (req, res) => {

const data = req.query.key1;
  fs.writeFile('output.txt', data, (err) => {
    if (err) {
      console.error('Error while writing the file:', err);
    } else {
      console.log('Data saved to your file babe.');
    }
  });
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  res.end('Data saved to your file babe.');
}); //end app.post

const hostname= '127.0.0.1';
const port='3000';

app.listen
(port,()=>{
  console.log('server running Now')
})

// const data = 'Hello, fuck your system and all your application.';
//   fs.writeFile('output.txt', data, (err) => {
//     if (err) {
//       console.error('Error while writing the file:', err);
//     } else {
//       console.log('Data saved to your file babe.');
//     }
//   });


      // async function readFile(filePath) {
      //   try {
      //     const data = await fs.readFile(filePath);
      //     console.log(data.toString());
      //   } catch (error) {
      //     console.error(`Got an error trying to read the file: ${error.message}`);
      //   }
      // }

