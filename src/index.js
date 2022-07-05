const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');

require('dotenv').config();

// Server creation
const app = express();
// Cors initialization
app.use(cors());

// DB Connection
// mongo {user, password}: {juandaosorio, v2MbhiMNod1tVrpG}
dbConnection();

// ROUTER
app.get('/', (request, response) => {
  response.json({
    ok: true,
    msg: 'All good :v'
  })
});

// Server execution
app.listen( process.env.PORT , () => {
  console.log( `Server running port ${process.env.PORT}`);
})