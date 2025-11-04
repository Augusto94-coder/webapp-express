const mysql = require('mysql2');

// usiamo il metodo di creazione oggetto di connessione
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
    /* host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'movies_db' */
});

// tramite metodo connect avvia connesione
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

// esportiamo il modulo CJS
module.exports = connection;