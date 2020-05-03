import React, { useEffect, useState } from 'react';
import {ItemList} from "./components/ItemList";
import {Container, Card, Button, Message, Title} from 'rbx';
import "rbx/index.css";
import './App.css';
import firebase from "./shared/firebase";
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const db = firebase.database().ref();

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const Welcome = ({ user }) => (
    <Message color="info">
      <Message.Header>
        Welcome, {user.displayName}
        <Button primary onClick={() => firebase.auth().signOut()}>
          Log out
        </Button>
      </Message.Header>
    </Message>
);

const Banner = ({ user, title }) => (
    <React.Fragment>
      { user ? <Welcome user={ user } /> : <SignIn /> }
      <Title>{ title || '[loading...]' }</Title>
    </React.Fragment>
);

const SignIn = () => (
    <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
    />
);

const App = () => {
  const [productData, setProductData] = useState({});
  const [inventory, setInventory] = useState({"":0});
  const [filteredData, setFilteredData] = useState([]);
  const products = Object.values(productData);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleData = snap => {
      console.log("all data", snap.val());
      if (snap.val()) {
        setInventory(snap.val()["inventory"]);
        setProductData(snap.val()["products"]);
      }
    };
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);


  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const product_response = await fetch('./data/products.json');
  //     const product_json = await product_response.json();
  //     setProductData(product_json);
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return (
      <Container>
        <Banner title="shopping cart" user={ user } />
        <ItemList products={ products } inventory={ inventory } > </ItemList>
      </Container>
  );
};

export default App;
