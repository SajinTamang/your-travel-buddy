import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async(sw,ne) =>{
    try{
        const {data:{data}} = await axios.get(URL,{
  params: {
    bl_latitude: sw.lat,
    tr_latitude:ne.lat ,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng ,
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "a139e0ef24mshfa7a4e71b2bc699p1f4a0djsnba3a33aa9be6",
  },
});

        return data;
    } catch(error){
        console.log(error)
    }
}