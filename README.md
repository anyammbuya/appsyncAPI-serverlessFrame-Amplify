# Building GraphQL API with AWS AppSync and Serverless Framework

Here, we used an Appsync plugin to configure and deploy the Appsync API through the serverless Framework. Later we leveraged AWS Amplify Libraries in a React App to connect to the AppSync API.

Authenticated users will use Cognito userpools to authenticate to the AppSync API and 
Guest users will use IAM supplied through cognito identity pools to authenticate to
AppSync API

DynamoDB is the GraphQL API datasource


![appsync](appsync.png)


## What are the resources used in this architecture?

Cognito

Appsync API

DynamoDB

IAM