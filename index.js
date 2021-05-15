require('dotenv').config();
const http = require("http");
const settings = require("./settings.json");
const express = require("express");
const app = express();
const server = http.createServer(app);
const session = require('express-session');
const passport = require('passport');
const db = require('./database/database');
const path = require('path');
const port = 8080;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
db.then(() => console.log('Connected to MongoDB.')).catch(err => console.log(err));


app.use(session({
  secret: 'thats gey', // changeable.
  cookie: {
    maxAge: 60000 * 60 * 24
  },
  saveUninitialized: false,
  resave: false,
  name: 'discord.oauth2',
}));

app.get("/", isAuthorized, (req, res) => {
  res.render('index', {
    bot: settings.website
  })
})

app.get("/auth", isAuthorized, (req, res) => {
  res.render('dashboard', {
    bot: settings.website
  })
})


function isAuthorized(req, res, next) {
  if (req.user) {
    console.log("User is logged in.");
    res.redirect('/dashboard');
  } else {
    console.log("User is not logged in.");
    next();
  }
}

app.get("/commands", (req, res) => {
  res.render("commands", {
    bot: settings.website,
    commands: settings.commands
  })
})
app.get("/terms", (req, res) => {
  res.render('terms', {
    bot: settings.website
  })
})

app.get("/privacy", (req, res) => {
  res.render('privacy', {
    bot: settings.website
  })
})

app.get("/changelog", (req, res) => {
  res.render('changelog', {
    bot: settings.website
  })
})

app.get("*", (req, res) => {
  res.render('404', {
    bot: settings.website,
    commands: settings.commands
  })
})

const listener = server.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
})
