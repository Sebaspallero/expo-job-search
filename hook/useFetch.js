import { useState, useEffect } from "react";
import axios from "axios";
/* import {RAPID_API_KEY} from '@env'

const apiKey = RAPID_API_KEY */

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '75769b13c7msh87f74c0c190c4bdp1db0e1jsn410148945eec',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query}
    };

    const fetchData = async() => {
        setIsLoading(true)
        try{
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        }
        catch(error){
            setError(error)
            alert('there is an Error')
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(()=> {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return {data, error, isLoading, refetch}
}

export default useFetch

