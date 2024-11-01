import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Here, we are connecting our app code to our existing authentication resource
// and our existing Appsync GraphQL API using Amplify, thus integrating the existing
// auth and GraphQL API resource to our Amplify backend
// Links:
// - https://docs.amplify.aws/javascript/build-a-backend/auth/use-existing-cognito-resources/
// - https://docs.amplify.aws/gen1/react/build-a-backend/graphqlapi/connect-to-api/
//When you are loging into your react app through the UI, 
// Amplify connects your login attempt to the required cognito userpool group
// In this case the userpool is the one we are using for our appsync graphql API

import { Amplify } from "aws-amplify"



// Amplify.configure({
//   Auth: {
//     Cognito: {
//       userPoolId: "us-east-1_9pN0NFzVu",
//       userPoolClientId: "556inj4eoqpvlnls5mmnuf6at4",
//       loginWith: {
//         email: true,
//       },    
//     },
//   },
// });

const myAppConfig = {
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_pDGFPTs89",
      identityPoolId: "us-east-1:a1ea3fcf-8425-433a-b64b-5f7f8599ece1",
      userPoolClientId: "k8bf4i8n03squ80vsrdbsvcb9",
      allowGuestAccess: true,   
    },
  },
  API: {
    GraphQL: {
      endpoint: 'https://hptb2dpv45a7rfgwz35qqo3qu4.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      // Set the default auth mode to "userPool"
      defaultAuthMode: 'userPool'   //i.e. this one is used when no other is specified
    }
  }

};
Amplify.configure(myAppConfig);
try{
  console.log("passed here");
  Amplify.configure(myAppConfig);
}catch(err){
  console.log(err);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


