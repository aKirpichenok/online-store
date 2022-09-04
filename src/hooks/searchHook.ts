import React,{useState, useEffect} from 'react';


    export const useSearch = (str) => {

        const [state, setState] = useState([])
        const [succes,setSuccess] = useState(false)
        const [isLoading,setIsLoading] = useState(true)
        const [error, setError] = useState(false)

        useEffect(() => {
            setIsLoading(true)
            fetch(str)
                .then(res=>res.json())
                .then(cos => {
                    setIsLoading(false)
                    setSuccess(true)
                    setState(cos)
                })
                .catch(res => setError(true))
        },[str])

        return {
            state,
            succes,
            isLoading,
            error
        }
    }