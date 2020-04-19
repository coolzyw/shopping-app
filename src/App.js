import React, { useEffect, useState } from 'react';
import ItemList from "./components/ItemList";
import {Container, Card} from 'rbx';
import "rbx/index.css";

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
      <Container>
          <ItemList products={ products } >
          </ItemList>
      </Container>
  );
};

export default App;
