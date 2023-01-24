import {Cars} from "./components/Cars/Cars";
import {CarForm} from "./components/CarForm/CarForm";
import {useEffect, useState} from "react";
import {carService} from "./services/carService";
import {UserForm, Users} from "./components";
import {userService} from "./services";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers([...data]))
    }, []);

    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]))
    }, []);


    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>

            <CarForm setCars={setCars}
                     updateCar={updateCar}/>
            <hr/>
            <Cars cars={cars}
                  setUpdateCar={setUpdateCar}
                  setCars={setCars}/>
        </div>
    );
}

export {App}
