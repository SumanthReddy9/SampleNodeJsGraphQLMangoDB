const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Event = require('./models/event');
const User = require('./models/user');
const app = express();
app.use(bodyParser.json());

graphQLResolvers = require('./graphql/resolvers/index');
graphQLSchema = require('./graphql/schema/index');

app.use('/graphql', graphqlHttp({
    schema: graphQLSchema,

    rootValue: graphQLResolvers,

    graphiql: true
}));

mongoose.connect('mongodb://localhost:27017/EventsDataBase')

app.listen(7000, () => {
    console.log("Server is listening on port 7000")
});

