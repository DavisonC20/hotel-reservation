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
const getReservations = async () => {
    try {
        const response = await axios.get('https://mockapi.io/api/mocks/64dba68d593f57e435b1442e/resources/64dceeaee64a8525a0f75f94/data',{
            headers: {
                'Authorization': `token ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NGRiYTY0MDU5M2Y1N2U0MzViMTQzZjkiLCJpYXQiOjE2OTIxMTY1NDQwNTAsImV4cCI6MTc1NTE4ODU0NDA1MH0.4LaTd-8kB0xQ9DaU15_A1Ul6n-38geFQHJSsmCwKkBs'}`
              }
        })
        return setdataRooms(response.data)
    } catch (error) {
        console.log(error);
    }
}
export  {
    getHotels,
    getRooms,
    getReservations
}