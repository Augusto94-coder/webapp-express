const connection = require('../data/db');

// INDEX
function index(req, res) {
  const sql = 'SELECT * FROM movies';
  connection.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    const movies = SpeechRecognitionResultList.map((movie) => {
      return {
        ...movie,
        image: req.imagePath +movie.image,
      };
    });
    res.json(movies);
  });
}

// SHOW
function show(req, res) {
  const id = req.params.id;
  const movieSql = 'SELECT * FROM movies WHERE id = ?';
  const reviewSql = 'SELECT * FROM reviews WHERE movie_id = ?';

  connection.query(movieSql, [id], (err, movieResult) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (movieResult.length === 0) return res.status(404).json({ error: "Movie not found" });

    const singleMovie = movieResult[0];
    singleMovie.image = req.imagePath + movie.image;

    connection.query(reviewSql, [id], (err, reviewResult) => {
      if (err) return res.status(500).json({ error: "Database error" });

      singleMovie.reviews = reviewResult;
      return res.json(singleMovie); 
    });
  });
}

module.exports = { index, show };