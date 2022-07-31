const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');

require('dotenv').config();

// Server creation
const app = express();
// Cors initialization
app.use(cors());

// read and parse of the request body 
app.use(express.json());

// DB Connection
// mongo {user, password}: {juandaosorio, v2MbhiMNod1tVrpG}
dbConnection();

// ROUTER
app.use('/api/users',require('./routes/users.routes'));
app.use('/api/auth/',require('./routes/auth.routes'));
app.use('/api/hospitals/',require('./routes/hospitals.routes'));
app.use('/api/doctors/',require('./routes/doctors.routes'));

app.get('/', (request, response) => {
  response.json({
    ok: true,
    message : 'All good :v'
  })
});

// Server execution
app.listen( process.env.PORT , () => {
  console.log( `Server running port ${process.env.PORT}`);
})