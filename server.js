import express from "express";
import morgan from "morgan";
import router from "./router/index.js";
import db_connection from "./db/conn.js";
const a = express();
const PORT = 5000;

a.set('view engine', "ejs");
a.use(express.static('public'));

a.use(morgan('dev'));

// router 
a.use(router);

a.listen(PORT, () => {
	// host
	console.log("running server" + " " + `https://localhost:${PORT}/`);
	// db connection
	db_connection();
})