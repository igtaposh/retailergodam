const express = require('express')
const app = express()
const path = require('path')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
   res.render('index');
})
app.get('/add', function (req, res) {
   res.render('add');
})
app.get('/additems', function (req, res) {
   res.render('additems');
})
app.get('/stockreport', function (req, res) {
   res.render('stockreport');
})
app.get('/inventory', function (req, res) {
   res.render('inventory');
})
app.listen(3000)
