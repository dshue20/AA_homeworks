const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const User = require("./models/user");
const Post = require("./models/post");
const schema = require("./schema/schema");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.use("/graphql", expressGraphQL({ 
    schema,
    graphiql: true 
}));

app.listen(5000, () => console.log('Server is running on port 5000'));