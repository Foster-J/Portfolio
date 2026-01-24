const ejs = require('ejs');
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/projects', (req,res) => {
    res.render('projects');
});

app.get('/contact', (req,res) => {
    res.render('contact');
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404");
});

// Start server
app.listen(port, () => {
  console.log(`Node application listening on port ${port}`);
});

module.exports = app;