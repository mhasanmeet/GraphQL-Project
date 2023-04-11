## GraphQL

GraphQL is a query language for APIs. Read Basic about GraphQL in [here](https://www.javatpoint.com/graphql)

Let's imagine, for data fetching we use most popular REST API. REST API have endpoints like,

/book/:id
/author
/author/name

but when the project grows, the endpoints quantities also grows and a lot of unnecessary data will be fetched. 

For this problem the GraphQL solve this issue, for specific type of request graphql have single endpoint query, like;

```
{
    user(id: 123){
        title{
            author{
                name
            }
        }
    }
}
```

## Install graphQL

`npm install graphql --save`

## graphQL project

* For frontend and backend we have one node js package.json file

Stack:
Backend:

* node express
* graphql
* express-graphql
* mongoose
* cors
* colors for node.js console
* Nodemon
* 

Frontend:

## Resources
* Traversy Media






