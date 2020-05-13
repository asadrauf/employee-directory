import {useEffect, useContext} from 'react';
import {GlobalContext} from "./GlobalContext";
import axios from "axios"

export function useGet(url){

    // variable destructing
    const{employees, setEmployees, displayedEmployees, setDisplayedEmployees} = useContext(GlobalContext);
   
    // gets employees from an api, stores them in both employees, and displayed employees. Only occurs once when component is mounted.
    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)
                // using employees to store a copy of all the employees that will not be manipulated
                setEmployees(response.data.results)
                // using displayed employees to be a manipulated version of the employees that will be displayed for sorting and filtering.
                setDisplayedEmployees(response.data.results)
            }
            catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }   
        }
        getEmployees()
    },[])

   