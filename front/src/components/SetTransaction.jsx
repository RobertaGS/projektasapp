import React from 'react';
import { useState } from 'react';
import transactionsService from '../services/transactionsService';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


const SetTransaction = ({getData}) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    
    const onSubmit = e =>{
        e.preventDefault();

        const setTransaction = {
            text: text,
            amount: amount,
            user: '62c3d7b76b6adfd4956bd756'
        }
        transactionsService.postTransactions(setTransaction);

        setText('');
        setAmount('');
        getData();
    }
    return (
      <div>
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Transaction</Form.Label>
                <Form.Control type="text"
                          placeholder="Enter text"
                          id='text'
                          name='text'
                          value={text}
                          onChange={(e)=> setText(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number"
                          placeholder="Enter amount"
                          id='amount'
                          name='amount'
                          value={amount}
                          onChange={(e)=> setAmount(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
      </div>
   
  )
  }

export default SetTransaction