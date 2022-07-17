import React, { useState, useEffect } from 'react';
import transactionServices from '../services/transactionServices';
import { Table } from 'react-bootstrap';


const Transactions = ()=> {
    const [Transactions, setTransactions] = useState([]);

    const getData = ()=> {
        transactionServices.getTransactions().then(res=>{
            setTransactions([...res.data]);
        })
    }
    useEffect(()=>{
        getData();
    }, []);
console.log(Transactions);
    return (
         <div>
            <h1 className ='text-center my-3'>Transactions</h1>
            {Transactions.length> 0 ? (
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transaction</th>
                            <th>Amount</th>
                        </tr>     
                    </thead>
                    <tbody>
                    {Transactions.map((Transactions, index)=> (
                        <tr key={index}>
                            <td>{}</td>
                            <td>{Transactions.text}</td>
                            <td>{Transactions.amount}</td>

                        </tr>))}
                    </tbody>
                </Table>) : (<h3 className='text-center my-3'>You have not transactions</h3>)}
        </div>
    )
}

export default Transactions