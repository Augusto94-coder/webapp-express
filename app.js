const express = require("express")
const app = express();
const port = 3000;

// importiamo globalmente il middleware di gestione errore server
const errorServer = require("./middlewares/errorServer");
// importiamo globalmente il middleware di gestione 404 per rotta inesistente
const notFound = require("./middlewares/notFound");



// usiamo il middleware static di express (per rendere disponibile i file statici)
app.use(express.static('public'));

// registro il body-parser per "application/json"
app.use(express.json());

// impostiamo la rotta di home
app.get("/", (req, res) => {
    console.log("hai richiesto la rotta di index");

    res.send('<h1>Ecco la home della API della nostra libreria</h1>')
})

// mettiamo in ascolto il server sulla porta definita
app.listen(port, () => {
    console.log(`Movies app listening on port ${port}`);
});