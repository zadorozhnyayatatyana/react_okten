import {carService} from "../../services/carService";

const Car = ({car, setUpdateCar, setCars}) => {

    const {id, brand, price, year} = car;

    const deleteCar = (id) => {
        const {data} = carService.deleteById(id).then(async ()=>{
            const {data} = await carService.getAll()
            setCars(data)
        });
    }

    return (
        <div>
            <div> id: {id} </div>
            <div> brand: {brand} </div>
            <div> price: {price} </div>
            <div> year: {year} </div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={() => deleteCar(car.id)}>Delete</button>
        </div>
    )
}

export {Car}