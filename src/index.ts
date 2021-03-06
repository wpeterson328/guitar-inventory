import express from "express";
const app = express();
const port = 8081; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, "0.0.0.0", () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
