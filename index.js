const ejs = require('ejs');
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Set view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.render('index');
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404");
});

// Start server
app.listen(port, () => {
  console.log(`Node application listening on port ${port}`);
});