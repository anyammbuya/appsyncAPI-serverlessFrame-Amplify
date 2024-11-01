/Here, we are connecting our app code to our existing authentication resource
// and our existing Appsync GraphQL API using Amplify, thus integrating the existing
// auth and GraphQL API resource to our Amplify backend
// Links:
// - https://docs.amplify.aws/javascript/build-a-backend/auth/use-existing-cognito-resources/
// - https://docs.amplify.aws/gen1/react/build-a-backend/graphqlapi/connect-to-api/

//When you are loging into your raect app through the UI, 
// Amplify connects your login attempt to the required cognito userpool group
// In this case the userpool is the one we are using for our appsync graphql API