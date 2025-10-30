const connection = require('../data/db');

//  INDEX
function index(req, res) {
    const sql = 'SELECT * FROM movies';

    // aggiungiamo la connesione per la richiesta
    connection.query(sql, (err, result) => {
        // gestiamo errore server mysql
        if (err) return res.status(500).json({ error: "Database error" })
        // ritorniamo il risultato ottenuto
        res.json(result);
    });
}

//  SHOW
function show(req, res) {
    const id = req.params.id;

    // prepariamo query per singolo libro
    const movieSql = 'SELECT * FROM movies WHERE id = ?';

    // aggiungiamo la connesione per la richiesta
    connection.query(movieSql, [id], (err, movieResult) => {
        // gestiamo errore server mysql
        if (err) return res.status(500).json({ error: "Database error" })
        // gestiamo anche il 404
        if (movieResult.length === 0) res.status(404).json({ error: "Book not found" })
        // ritorniamo il risultato ottenuto
        res.json(movieResult[0]);
    });
}

module.exports = { index, show }