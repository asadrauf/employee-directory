import React, { useState, useContext } from 'react';
import { useGet } from "../../utils/API";
import "./Table.css";
import Button from "../Button/Button";
import { GlobalContext } from "../../utils/GlobalContext";

function Table() {
    
    const [url] = useState("https://randomuser.me/api/?results=20")
    // custom hook used for getting the employees from the api and storing the sort functions
    const { sortFunc } = useGet(url);
    // contains the employees to display in the table
    const { displayedEmployees} = useContext(GlobalContext)

    return (
        <table  id="table" className="table table-striped table-hover table-condensed">
            <thead>
                <tr>
                    <td>Image</td>
                    <td onClick={() => sortFunc("name")}><Button>First Name <span className="pointer"></span></Button></td>
                    <td>Last Name</td>
                    <td>Gender</td>
                    <td>E-mail</td>
                    <td onClick={() => sortFunc("age")}><Button>Age</Button></td>
                </tr>
            </thead>
            <tbody>
                {displayedEmployees.map(employee => {
                    return (
                        <tr key={employee.login.uuid}>
                             <td data-th="Image" className="align-middle">
                             <img
                             src={employee.picture.medium}
                            alt={"profile image for " + employee.name.first + " " + employee.name.last}
                            className="img-responsive"
                            />
                            </td>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.age}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;