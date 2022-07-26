import * as express from 'express';
const  http = require('http')
const mysql = require("mysql");
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect()

module.exports = {
    getAssets: async (request: express.Request, response: express.Response) => {
      try {   
              
        connection.query("select * from assets", (err, rows, fields) => {
          return response.json(rows);
        });
      
        connection.end();        
      } catch (error) {
        console.log('getAssets', error)
      }   
    }    
};