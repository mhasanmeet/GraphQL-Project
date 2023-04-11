## get all project data in GraphQL editor (localhost:{port}/graphql)

```
projects{
    id,
    name,
    description,
    status
}

```

or just specific one data

```
projects{
    name
}

```

## get specific project data in GraphQL editor (localhost:{port}/graphql)

```
project(id: "1"){
    id,
    name,
    ......
}
```

## get all client data in GraphQL editor (localhost:{port}/graphql)

```
 clients{
    id,
    name,
    ......
}

```

## get specific client data in GraphQL editor (localhost:{port}/graphql)

```
client(id: "1"){
    id,
    name,
    ......
}
```

## Get project info with client info

```
{
  project(id: "2") {
    id,
    name,
    description
    client{
      name
    }
  }
}
```