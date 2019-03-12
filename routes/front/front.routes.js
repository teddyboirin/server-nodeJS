/* 
imports 
*/

  const express = require('express');
  const frontRouter = express.Router();



/* configuration */

   class FrontRouterClass {

    constructor() {};
     routes() {
       // configurer la homepage
       frontRouter.get(`/`, (req, res) => {
        // rendre le fichier index
        res.render(`index`);
       })
       frontRouter.get(`/me`, (req, res) => {
        // rendre le fichier index
        res.render(`me`);
       })

       

     };

     init() {
      // lancer la méthode routes
      this.routes();

      // renvoyer le router
      return frontRouter;
     };
   }

/* 
Export

*/

module.exports = {FrontRouterClass};