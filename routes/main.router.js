/* 
Imports
*/
    // NodeJS
    const { Router } = require('express');

    // Inner
    const { FrontRouterClass } = require('./front/front.routes');
//

/* 
Configuration
*/
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();

    // Child
    const frontRouter = new FrontRouterClass();

    // Routes
    mainRouter.use( `/`, frontRouter.init() );
//

/* 
Export
*/
    module.exports = { mainRouter };
//