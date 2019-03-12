/*
imports 
*/
  // NodeJS
  require('dotenv').config(); // variable d'environnement
  const express = require('express'); //configuration du serveur
  const ejs = require('ejs'); // moteur de template
  const path = require('path'); // gestion du dossier 
    // Inner 

    const { mainRouter } = require('./routes/main.router');
  

/*
Configuration
*/
//
  const server = express();
  // defintion du port

  const port = process.env.PORT;
  // configuer le dossier www
  server.set('views', __dirname + '/www');
  server.use( express.static(path.join(__dirname, 'www')));
  //configuer le moteur de rendu 
  server.set('view engine', 'ejs');
  // ajouter le router dans le serveur 
  server.use(`/`, mainRouter);


/*
Lancer le serveur
*/
//
  server.listen( port, () => {
    console.log(`Server listening on port ${port}.`);

  });
