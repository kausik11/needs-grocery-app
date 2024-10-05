import React, { useContext } from 'react'
import './App.css';
import Routing from './Routing/Routing';
import { StoreContext } from './context/StoreContext';

const App = () => {
  // const{printHello} = useContext(StoreContext);
  // printHello("kausik");
  return (
    <div className='app_container'>
     <Routing/>
    </div>
  )
}

export default App
