import axios from "axios";



export default async function getData(endpoint) {

  try {
    const response = await axios.get('http://localhost:1337' + endpoint);
    

    return response.data;

  } catch (error) {
    console.error(error);
    throw error;
  }
}