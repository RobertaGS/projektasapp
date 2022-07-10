import React, { useState, useEffect } from 'react';
import transactionServices from '../services/transactionServices';

const Transactions = ()=> {
    const [transactions, setTransactions] = useState([]);

    const getData = ()=> {
        transactionServices.getTransactions().then(res=>{
            setTransactions([...res.data]);
        })
    }
    useEffect(()=>{
        getData();
    }, []);
console.log(transactions);
    return (
        <div>Transactions</div>
    )
}

export default Transactions