//get projects and clients data
const {projects, clients} = require("../sampleData");
//get graphql types
const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList} = require("graphql")


//project type
const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
        //get client data in a project
        client: {
            type: ClientType,
            resolve(parent, args){
                return clients.find(client => client.id === parent.clientId)
            }
        }
    })
})

//client type
const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}
    })
})

//root query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args){
                return projects
            }
        },

        /*
            get all project data in GraphQL editor (localhost:{port}/graphql)

            projects{
                id,
                name,
                ......
            }

        */
       
        project: {
            type: ProjectType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return projects.find((project) => project.id === args.id)
            }
        },

        /*
            get specific project data in GraphQL editor (localhost:{port}/graphql)

            project(id: "1"){
                id,
                name,
                ......
            }

        */

        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args){
                return clients
            }
        },

        /*
            get all client data in GraphQL editor (localhost:{port}/graphql)

            clients{
                id,
                name,
                ......
            }

        */
       
        client: {
            type: ClientType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return clients.find((client) => client.id === args.id)
            }
        }

        /*
            get specific client data in GraphQL editor (localhost:{port}/graphql)

            client(id: "1"){
                id,
                name,
                ......
            }

        */
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})