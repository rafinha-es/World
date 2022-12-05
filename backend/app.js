
const express = require('express');
const session = require('express-session');
const hostname = '127.0.0.1';
const port = 3008;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'dbUsers.db';
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(express.static("../frontend"));
app.use(express.json())


/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
// Gabriela 
app.post('/auth', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
 
  var db = new sqlite3.Database(DBPATH); // Abre o banco

    sql = "SELECT * FROM user WHERE username = '" + req.body.username + "' AND password='" + req.body.password + "'";
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      else {
				res.json(rows);
			}			
			 res.end();
    });
  
  db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/register', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO user (username, email, password) VALUES ('" + req.body.username + "', '" + req.body.email + "', '" + req.body.password + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

app.post('/information', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
 
  var db = new sqlite3.Database(DBPATH); // Abre o banco

    sql = "SELECT * FROM user WHERE username = '" + req.body.username + "'";
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      else {
				res.json(rows);
			}			
			 res.end();
    });
  
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/userUpdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE user SET name = '" + req.body.name +  "', lastname = '" + req.body.lastname + "', bio = '" + req.body.bio + "', phone = '" + req.body.phone + "', ocupation = '" + req.body.ocupation + "', instagram = '" + req.body.instagram + "', linkedin = '" + req.body.linkedin + "', github = '" + req.body.github + "', local = '" + req.body.local + "' WHERE username = '" + req.body.username + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});