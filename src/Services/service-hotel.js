import axios from "axios";

const ROUTE_API = "https://64dba68d593f57e435b1442d.mockapi.io/api/test/";

const getHotels = async (setDataHotels,setLoad) => {
  try {
    const response = await axios.get(ROUTE_API + "Hotels");
    setLoad(false)
    return setDataHotels(response.data);
  } catch (error) {
    console.log(error.response);
  }
};
const getRooms = async (idHotel, setdataRooms,setLoad) => {
  try {
    const response = await axios.get(
      ROUTE_API + "Hotels/" + idHotel + "/rooms"
    );
    setLoad(false)
    return setdataRooms(response.data);
  } catch (error) {
    console.log(error);
  }
};
const getReservations = async (setdataReservation) => {
  try {
    const response = await axios.get(
      ROUTE_API + 'Hotels/1/rooms/1/roomreserv'
    );
    return setdataReservation(response.data);
  } catch (error) {
    console.log(error);
  }
};
export { getHotels, getRooms, getReservations };
