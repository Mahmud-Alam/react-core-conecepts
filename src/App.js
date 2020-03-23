import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const heros = ['Amir','Salman','Hrittik','Sharuk']

  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name: 'Illustrator',price:'$60.99'},
    {name: 'PDF Reader',price:'$6.99'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            heros.map(hero=><li>{hero}</li>)
          }
        </ul>
        {
            products.map(pdm=><Product product = {pdm}></Product>)
          }
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[]);

  return(
    <div>
      <h3>Users: {users.length}</h3>
      <ul>
        {
            users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount]=useState(0);
  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)} >Increase</button>
      <button onClick={()=>{if(count===0)setCount(count);else{setCount(count-1)}}} >Decrease</button>
    </div>
  );
}

function Product(props){
  const productStye={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product; 
  return(
    <div style={productStye} > 
      <h5>Name:{name}</h5>
      <h3>Price:{price} </h3>
      <button>Buy Now</button>
    </div>
  )
}


export default App;
