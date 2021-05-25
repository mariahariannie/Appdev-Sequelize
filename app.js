const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express ();
var md5 = require('md5');
const http = require("http");
const server = http.createServer(app);
const session = require('express-session');
const exphbs = require('express-handlebars');
const fileUpload = require('express-fileupload');

var connection = mysql.createPool({
    connectionLimit: 20,
    host: "localhost",
    user: "root",
    password: "",
    database: "forums" /*Create a database "forums*/
})
// SEE if DATABASE has been connected successfully
connection.getConnection((err) => {
    if (err) {
        throw err;
    }
    console.log("Database Connected");
})

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.engine('hbs', exphbs({ extname: '.hbs' }));

app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/profileImg', express.static(__dirname + '/public/profileImg'));
// control.use('/js', express.static(__dirname + '/public/js'));
// control.use('/assets', express.static(__dirname + '/assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const accountroutes = require("./routes/accountroutes");
const threadroutes = require("./routes/threadroutes");
app.use("/", accountroutes);
app.use("/", threadroutes);


app.listen(8020, () => console.log("8020 is open"))