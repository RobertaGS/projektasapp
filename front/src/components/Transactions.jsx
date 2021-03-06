import React, { useState, useEffect } from 'react';
import transactionsService from '../services/transactionsService';
import { Table } from 'react-bootstrap';


const Transactions = ()=> {
    const [transactions, setTransactions] = useState([]);

    const getData = ()=> {
        transactionsService.getTransactions().then(res=>{
            setTransactions([...res.data]);
        })
    }
    useEffect(()=>{
        getData();
    }, []);
console.log(transactions);
    return (
         <div>
            <h1 className ='text-center my-3'>Transaction</h1>
            {transactions.length> 0 ? (
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Incomes And Expences</th>
                            <th>Amount</th>
                        </tr>     
                    </thead>
                    <tbody>
                    {transactions.map((transaction, index)=> (
                        <tr key={index}>
                            <td>{}</td>
                            <td>{transaction.text}</td>
                            <td>{transaction.amount}</td>

                        </tr>))}
                    </tbody>
                </Table>) : (<h3 className='text-center my-3'>You have not transactions</h3>)}
        </div>
    )
}

export default Transactions