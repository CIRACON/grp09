import { NavBar } from './NavBar';
import { EmployeeTable, EmployeeTableManager, EmployeeTableEmployee } from './EmployeeTable';
import { getEmployees } from './rest';
import React, { useState, useEffect } from 'react';
import { useHref, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export function EmployeeDirectory() {
    const routeParams = useParams();
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        let promise = getEmployees();
        promise.then(
            (employees) => {
                setEmployees(employees);
            }
        )
    }, []);
    const navigate = useNavigate();
    function handleClick(){
        navigate(`/`)
    } 

    console.log(`Access level is`, routeParams);
    if (routeParams.id === `employee`) {
        return(
            <>
            <NavBar />
            <EmployeeTableEmployee employees={employees}  />
            <button style={{marginTop: `20px`}} onClick={handleClick}> Go Back </button>
        </>
        ) 
    } 
    if (routeParams.id === `manager`) {
        return(
            <>
            <NavBar />
            <EmployeeTableManager employees={employees}  />
            <button style={{marginTop: `20px`}} onClick={handleClick}> Go Back </button>
        </>
        )
        
    }
    return(
        <>
            <NavBar />
            <EmployeeTable employees={employees}  />
            <button style={{marginTop: `20px`}} onClick={handleClick}> Go Back </button>
        </>
    )
}