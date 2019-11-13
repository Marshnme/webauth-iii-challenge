const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const loginRouter = require('./accountRouter/loginRouter');
const regRouter = require('./accountRouter/regRouter');
const authRouter = require('./authRouter/authRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/register',regRouter);
server.use('/api/login',loginRouter);
server.use('/api/users',authRouter);

module.exports = server;