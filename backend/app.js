
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

// Exclui um registro (é o D do CRUD - Delete)
app.post('/agendaDelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM Agenda WHERE idAgenda =" + req.body.idAgenda;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});


//CRUD - Eixos
// Sophia
app.get('/Eixo', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Eixo ORDER BY Eixo COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//Insere um registro (é o C do CRUD - Create)
app.post('/eixoInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Eixo (idEixo, idAgenda, Eixo) VALUES ('" + req.body.idEixo + "', '" + req.body.idAgenda + "' , 'Adição Teste')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/eixoUpdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE Eixo SET Eixo = '" + req.body.Eixo + "' WHERE idEixo = " + req.body.idEixo;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/eixoDelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM Eixo WHERE idEixo =" + req.body.idEixo;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

// CRUD - Escola 
// Henrique
app.get('/Escola', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Escola ORDER BY idEscola COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//Insere um registro (é o C do CRUD - Create)
app.post('/escolaInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Escola (Cidade, idEscola, Modalidade, NumProf, NumAlun, NumFunc, Nome, Estado) VALUES ('" + req.body.Cidade + "', '" + req.body.idEscola + "' ,'" + req.body.Modalidade + "', '" + req.body.NumProf + "', '" + req.body.NumAlun + "', '" + req.body.NumFunc + "', '" + req.body.Nome + "','" + req.body.Estado + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// CRUD - Pergunta 
//Mateus
app.get('/Pergunta', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Pergunta ORDER BY idEixo COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

app.post('/deletePergunta', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "DELETE FROM Pergunta WHERE idPergunta =" + req.body.idPergunta ;
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close();
});

  //Insere um registro (é o C do CRUD - Create)
  app.post('/perguntaInsert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "INSERT INTO Pergunta (idPergunta, Pergunta, idEixo, idTema, idTipo) VALUES ('" + req.body.idPergunta + "', '" + req.body.Pergunta + "' ,'" + req.body.idEixo + "', 2, 2)";
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [], err => {
      if (err) {
        throw err;
      }
    });
    db.close(); // Fecha o banco
    res.end();
  });

// CRUD - Tema 
//Patricia
app.get('/Tema', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Tema ORDER BY idTema COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//Insere um registro (é o C do CRUD - Create)
app.post('/temaInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Tema (idTema, idEixo, idAgenda, Tema) VALUES ('" + req.body.idTema + "', '" + req.body.idEixo + "' ,'" + req.body.idAgenda + "','" + req.body.Tema + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// CRUD - Resposta Gestao
// Daniel
app.get('/RespostaGestao', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM RespostaGestao ORDER BY Escola COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//Insere um registro (é o C do CRUD - Create)
app.post('/respostagestaoInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO RespostaGestao ( idPergunta, Escola, Resultado, Tema) VALUES ( '" + req.body.idPergunta + "' ,'" + req.body.Escola + "','" + req.body.Resultado + "','" + req.body.Tema + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// CRUD - Resposta Geral
// Daniel
app.get('/RespostaEducacional', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM RespostaEducacional ORDER BY Escola COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//Insere um registro (é o C do CRUD - Create)
app.post('/respostaeducacionalInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO RespostaEducacional (idPergunta, Escola, Resultado, Eixo) VALUES ('" + req.body.idPergunta + "' ,'" + req.body.Escola + "','" + req.body.Resultado + "','" + req.body.Eixo + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/respostaeducacionalupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200; 
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE RespostaEducacional SET Resultado = '" + req.body.Resultado + "' WHERE idPergunta = " + req.body.idPergunta + " AND  Escola = '" + req.body.Escola + "'";
  console.log(sql)
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

//Gabriela
app.get('/Cidade', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT Cidade FROM Cidade  WHERE idEstado = 2 ';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Patricia
app.get('/Opcao', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Opcao ORDER BY idOpcao COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//Insere um registro (é o C do CRUD - Create)
app.post('/opcaoInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Opcao (idOpcao, Alternativa, idTipo, idPergunta, Resultado) VALUES ('" + req.body.idOpcao + "', '" + req.body.Alternativa + "' ,'" + req.body.idTipo + "','" + req.body.idPergunta + "', '" + req.body.Resultado + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});


/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});