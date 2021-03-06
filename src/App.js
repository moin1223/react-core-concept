import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products=[
    {name:'photo', price:'$12'},
    {name:'game', price:'$12'}
  ]
  const nayoks=['monir','sayem','korim','rubel']
  return (
    <div className="App">
      <header className="App-header">
        <p>React js</p>

       
        <Counter></Counter>

        <Users></Users>

        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product=><Product product={product}></Product>)
}
       

      </header>
    </div>
  );
}


function Counter(){
  const [count,setCount]=useState(10);
  // const handleIncrese= () =>setCount(count +1);

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() =>setCount(count -1)}>Decrease</button>
      <button onClick={() =>setCount(count +1)}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:"2px solid gray",
    margin:"10px",
    padding:"10px",
    borderRadius:'5px',
    height:"200px",
    width:"200px",
    float:"left"
  }
  const {name,price}=props.product;
  return <div style={productStyle}>
    <h2>{name}</h2>
    <h3>{price}</h3>
    <button>Bye naw</button>
    </div>
  
}

//Data load

function Users(){

  const[users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  
  return(

    <div>

      <h3>dainamik</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
