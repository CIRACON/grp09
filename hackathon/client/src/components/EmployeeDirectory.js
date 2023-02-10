import { NavBar } from './NavBar';
import { EmployeeTable, EmployeeTableManager, EmployeeTableEmployee } from './EmployeeTable';
import { getEmployees } from './rest';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

    console.log(`Access level is`, routeParams);
    if (routeParams.id === `employee`) {
        return(
            <>
            <NavBar />
            <EmployeeTableEmployee employees={employees}  />
        </>
        ) 
    } 
    if (routeParams.id === `manager`) {
        return(
            <>
            <NavBar />
            <EmployeeTableManager employees={employees}  />
        </>
        )
        
    }
    return(
        <>
            <NavBar />
            <EmployeeTable employees={employees}  />
        </>
    )
}