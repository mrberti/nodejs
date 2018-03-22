"use strict"

/* Global defines */
const logfile = "./server.log"

/* Includes */
let http = require("http");
let fs = require("fs");
let formidable = require("formidable");

/* Function handlers */
let fileWrite = function(err) {
  if(err) {
    throw err;
  }
  console.log("saved file");
};

let serverHandler = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  let data = Date() + " Requested URL: " + req.url + "\n";
  res.write(data);
  res.end();

  fs.appendFile(logfile, data, fileWrite);
};

/* "Main" */
console.log("Creating logfile: " + logfile);
fs.writeFile(logfile, "",function(err) {});
console.log("Creating server");
http.createServer(serverHandler).listen(8080);
