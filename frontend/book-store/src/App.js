import React, { useState } from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import { getBookById } from "./graphql/queries/book";
import { generateClient } from 'aws-amplify/api';

// The uri below is the source of the code below
//https://ui.docs.amplify.aws/react/connected-components/authenticator

const client = generateClient();

function App({ isPassedToWithAuthenticator, signOut, user }) {

  const [book, setBook] = useState(null);

  const viewBook = () => {
    if (book) {
      return (<article>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <p>{book.author}</p>
        <h4>{book.price}</h4>
      </article>)
    }
  }
  
  const getBook = async () => {
    // make a call to appsync api
    const book = await client.graphql({ 
      query: getBookById,
      variables: { id: "44ce7aca-1c99-4052-8eda-7843a5965325" },
      authMode: 'iam'  // Guest Users (i.e. unauthenticated) use an IAM role from cognito identity pool to authenticate to the appsync API when running getBookById
      //authMode: 'UserPool'  // Used by authenticated who authenticate to appsync through cognito userpool. You can't use appsync without authentication
    });

    // const book = await API.graphql({
    //   query: getBookById,
    //   variables: { id: "97d97d2d-87b6-4e81-97da-8a63a1f8ae9f" },
    //   authMode: 'AWS_IAM'
    // });

    setBook(book.data.getBookById);
  }


  return (
    <>
       {/* <h1>Hello {user.username}</h1> */}
      {/* <button onClick={signOut}>Sign out</button> */}
      <section className="book-section">
        <hr/>
        <button onClick={() => getBook()}>Get book details</button>
        <hr/>
        {viewBook()}
      </section>
    </>
  );
}

export default App;

