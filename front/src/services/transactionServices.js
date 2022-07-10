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
const transactionServices = {
    getTransactions,
}

export default transactionServices