const express = require('express');
const login = require('./routers/login.router');
const user = require('./routers/user.router');
const categories = require('./routers/categories.router');
// ...

const app = express();

app.use(express.json());

app.use('/login', login);
app.use('/user', user);
app.use('/categories', categories);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
