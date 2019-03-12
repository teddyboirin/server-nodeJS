/* 
imports 
*/

  const express = require('express');
  const apiRouter = express.Router();



/* configuration */

   class RouterClass {

    constructor() {};
     routes() {
       // configurer la homepage de l'api
       apiRouter.get(`/`, (req, res) => {
        // rendre le fichier index
        res.render(`index`);
       })
       apiRouter.get(`/me`, (req, res) => {
        // renvoyer les données en JSON
        res.json({msg: 'Hello Api', data: null});
       })

       

     };

     init() {
      // lancer la méthode routes
      this.routes();

      // renvoyer le router
      return apiRouter;
     };
   }

/* 
Export

*/

module.exports = {RouterClass};