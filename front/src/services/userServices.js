import axios from 'axios';


const API_URL = '/api/user';
const API_URL_LOGIN = '/api/user/login'


//Log In - prisijungimas
const getLogIn = async(login) => {
    try{
        const response = await axios.post(API_URL_LOGIN, login);
        console.log(response);
        return response;
    } catch (error) {
      console.log(error)
    }
  
}
//Register - registracijaa
const postRegister = async(register) => {
  try {
    const response = await axios.post(API_URL, register);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error)
  }
}

const userServices = {
  postRegister,
  getLogIn
}

export default userServices