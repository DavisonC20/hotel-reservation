import axios from "axios";

const ROUTE_API = 'https://64dba68d593f57e435b1442d.mockapi.io/api/test/';

const getHotels = async (setDataHotels) => {
     try {
         const response = await axios.get(ROUTE_API+'Hotels')
         return setDataHotels(response.data)
     } catch (error) {
        console.log(error.response);
     }
}
const getRooms = async (idHotel,setdataRooms) => {
    try {
        const response = await axios.get(ROUTE_API+'Hotels/'+idHotel+'/rooms')
        return setdataRooms(response.data)
    } catch (error) {
        console.log(error);
    }
}
export  {
    getHotels,
    getRooms
}