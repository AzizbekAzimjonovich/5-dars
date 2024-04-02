import { useState } from "react"
import {useFetch} from '../hooks/useFetch'

import './TripList.css'

function TripList() {

    //const [trip, setTrip] = useState([])

    const [url, setUrl] = useState('http://localhost:3000/tripss')
    const {data: trip, isPending,error}=useFetch(url)
   /** const FTrip = useCallback(async () => {
        const req = await fetch(url)
        const data = await req.json()
        setTrip(data)
    }, [url])

    useEffect(() => {
        FTrip()
    }, [FTrip]) */


    return (
        <div className="trip-list">
            <h1>Trip List</h1>
            { isPending && <div><p>loading..</p></div> }
            {error&&<div>{error}</div>}
            <ul>
                {trip && trip.map((trip) => {
                    return (
                        <li key={trip.title}>
                            <p>{trip.title}</p>
                            <p>{trip.price}</p>
                        </li>
                    )
                })}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>Europe</button>
                <button onClick={() => setUrl('http://localhost:3000/trips')}>All</button>
            </div>
        </div>
    )
}

export default TripList
