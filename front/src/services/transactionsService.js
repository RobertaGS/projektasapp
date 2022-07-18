import axios from 'axios';

const API_URL = '/api/transactions';

//get transactions
const getTransactions = async()=>{

    try{
        const responce = await axios.get(API_URL);
        //console.log(responce);
        return responce;
     }  catch (error) {
        console.error(error);
     }
}
//post transactions
const postTransactions = async(transaction)=>{
    try {
        const responce = await axios.post(API_URL, transaction);
        //console.log(responce);
        return(responce);
    } catch (error) {
        console.error(error);
    }
}

const transactionsService = {
    getTransactions,
    postTransactions
}

export default transactionsService