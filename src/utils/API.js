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

    // used to decide which sort function to trigger
    function sortFunc(sort){
        switch(sort){
            case "name":
                sortByName()
                break
            case "age":
                sortByAge()
                break
            default:
                console.log("sort does not match any cases")
        }
    }

    // sorts the employees based on first name. (seek help from stackoverflow to read different threads and from some online solutions)
    function sortByName(){
         employees.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            }
        })
        // You have to spread, because this creates a new variable, instead of just updating the variable. React will not recognize it as an update if you just update the variable.
        setDisplayedEmployees([...employees])
    }


}