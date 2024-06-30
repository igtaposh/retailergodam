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
app.get('/suppliers', function (req, res) {
   res.render('supplierlist');
})
app.get('/login', function (req, res) {
   res.render('login');
})
app.get('/signup', function (req, res) {
   res.render('signup');
})
app.get('/supplierprofile', function (req, res) {
   res.render('supplierprofile');
})
app.get('/productprofile', function (req, res) {
   res.render('productprofile');
})
app.listen(3000)
