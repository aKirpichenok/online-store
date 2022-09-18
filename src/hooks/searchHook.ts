import React,{useState, useEffect} from 'react';


    export const useSearch = (str) => {

        const [state, setState] = useState<any>([])
        const [succes,setSuccess] = useState<boolean>(false)
        const [isLoading,setIsLoading] = useState<boolean>(true)
        const [error, setError] = useState<boolean>(false)

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