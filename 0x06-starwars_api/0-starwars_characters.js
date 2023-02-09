#!/usr/bin/node
// starwars API

const request = require('request');
const MOVIEID = process.argv[2];

// Request URL
const URL_BASE = 'https://swapi-api.hbtn.io/api/films';

function doRequest (url) {
  return new Promise(function (resolve, reject) {
    request(url, function (error, res, body) {
      if (!error && res.statusCode === 200) {
        resolve(JSON.parse(body));
      } else {
        reject(error);
      }
    });
  });
}

// Usage:

async function main (movieID) {
  const res = await doRequest(`${URL_BASE}/${movieID}`);
  for (const e of res.characters) {
    const pj = await doRequest(e);
    console.log(pj.name);
  }
}

main(MOVIEID);
