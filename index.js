#!/usr/bin/env node
const JsonToTS = require('json-to-ts');
const fs = require('fs');

const inputFile = process.argv[2];

if (!inputFile) {
  return console.error('Input file must be specified.');
}

let contents;
try {
  contents = fs.readFileSync(inputFile).toString();
} catch (e) {
  return console.error(e);
}

try {
  JsonToTS(JSON.parse(contents)).forEach(typeInterface => {
    console.log(typeInterface);
  });
} catch (e) {
  return console.error(e);
}
