import React from 'react';
import SetTransaction from './SetTransaction';
import Transactions from './Transactions';
import Register from './Register';
import LogIn from './LogIn';


const Main = () => {
  return (
    <div>
      <Register/>
      <LogIn/>
      <Transactions/>
      <SetTransaction/>
    </div>
  )
}

export default Main
