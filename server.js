var express = require("express");
var app = express();
var engines = require('consolidate');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('views', './views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }))



app.get("/", function (req, res) {
    res.render("index");
})
app.get("/recruit", function (req, res) {
    res.render("Form");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
})
