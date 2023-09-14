const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')

app.get('/', (req,res) => {
       
    const connect = mysql.createConnection(config)
    // Se a tabela referente a aplicação não existir, cria a mesma
    connect.query(
           `CREATE TABLE IF NOT EXISTS nodedb.people (
            id INT(11) NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            PRIMARY KEY (id)
            )`
        )
    connect.query(`delete from people `)
    connect.query(`insert into people (name) values ('Gilberto de Freitas Lins'), ('Wesley Willians'), ('Luiz da Argentina - hermano')`)
    
    connect.query('SELECT * FROM people', (error, results) => {
        if (error) throw error;
        console.log(results);
        // Cria a tabela HTML e lista os dados da tabela MySQL
        let table = '<style>table, th, td {border:1px solid black;}</style><table>';
        table += '<table>';
        table += '<tr><th>ID</th><th>NOME</th></tr>';
        results.forEach((result) => {
          table += '<tr><td>' + result.id + '</td><td>' + result.name + '</td></tr>';
        });
        table += '</table>';
        
        // Escreva a tabela HTML na página
        res.send('<h1>Full Cycle Rocks!!!</h1>' +
                 '<br><b>Lista da tabela People: </b>' + 
                table);
      });

    connect.end()
})

app.listen(port, ()=> {
    console.log(' ' )
    console.log('NODE : Rodando na porta ' + port)
    console.log(' ' )
})

