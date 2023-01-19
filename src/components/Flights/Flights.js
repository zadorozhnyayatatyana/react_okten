import {useEffect, useState} from "react";
import {axiosServiceSpaceX} from "../services/axiosService";
import {Flight} from "../Flight/Flight";

const Flights = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(()=>{
       axiosServiceSpaceX.get().then(value => value.data).then(value => setLaunches([...value]))
    },[]);

    return (
        <div>
            <h1>SpaceX</h1>
            {launches.filter(flight => flight.launch_year !=='2020').map(flight => <Flight key={flight.flight_number+flight.mission_name} flight={flight}/>)}
        </div>
    )
}

export {Flights}