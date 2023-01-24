import {urls} from "../configs";
import {axiosCars} from "./axiosService";

const carService={
    getAll:()=>axiosCars.get(urls.cars),
    create:(newCar)=>axiosCars.post(urls.cars, newCar),
    updateById:(id, data)=>axiosCars.put(`${urls.cars}/${id}`,data),
    deleteById:(id)=>axiosCars.delete(`${urls.cars}/${id}`)
}
export {
    carService
}