import React from 'react';
import './App.css';
import Product from './Product';

const products = [
  {
    Title: "Product 1",
    Price: 10,
    Description: "First product"
  },
  {
    Title: "Product 2",
    Price: 20,
    Description: "Second product"
  }
]

function App() {


  return (

    <>

      <h1 id='title'>My Demo Shop</h1>

      <div id='products'>
        {
          products.map((pro, index) => {
            return <Product data={pro} key={index} />

          })
        }
      </div>

    </>

  );
}

export default App;
