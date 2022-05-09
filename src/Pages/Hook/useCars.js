import { useEffect, useState } from "react"

const useCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://limitless-mesa-13748.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return[cars, setCars]
}
export default useCars;