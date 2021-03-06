require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const ctrl = require('./controller');

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
        console.log(`listening on ${SERVER_PORT}`)
    })
})

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 100000000 }
})) 

//// AUTH ENDPOINTS /////
app.post('/api/login', ctrl.login)
app.post('/api/register', ctrl.register)
app.get('/auth/user-data', ctrl.userData)

//// POST ENDPOINTS //////
app.get('/api/posts', ctrl.readPosts)


// app.post('/api/logout', ctrl.logout)
