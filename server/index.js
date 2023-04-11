const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 5000
// get graphQL
const { graphqlHTTP } = require('express-graphql');
//get schema
const schema = require("./schema/schema")

//use graphQl
app.use("/graphql", graphqlHTTP({
    schema,
    // if the project is in "development" then it should have graphiql editor, otherwise it should't have
    // graphiql: process.env.NODE_ENV === "development",
    graphiql: true
}))

app.listen(port, console.log(`server is running at ${port}`))

