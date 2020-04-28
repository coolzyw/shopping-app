import React, { useEffect, useState } from 'react';
import {ItemList} from "./components/ItemList";
import {Container, Card, Button} from 'rbx';
import "rbx/index.css";
import './App.css';
import firebase from "./shared/firebase";

const db = firebase.database().ref("inventory");

const App = () => {
  const [productData, setProductData] = useState({});
  const [inventory, setInventory] = useState({"":0});
  const [filteredData, setFilteredData] = useState([]);
  const products = Object.values(productData);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const handleData = snap => {
      console.log("inventory", snap.val());
      if (snap.val()) setInventory(snap.val());
    };
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);


  useEffect(() => {
    const fetchProducts = async () => {
      const product_response = await fetch('./data/products.json');
      const product_json = await product_response.json();
      setProductData(product_json);
    };
    fetchProducts();
  }, []);

  return (
      <Container>
          <ItemList products={ products } inventory={ inventory } > </ItemList>
      </Container>
  );
};

export default App;
