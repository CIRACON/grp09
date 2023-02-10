import { NavBar } from './NavBar';
import { EmployeeTable } from './EmployeeTable';
import { getEmployees } from './rest';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'


export function EmployeeDirectory() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        let promise = getEmployees();
        promise.then(
            (employees) => {
                setEmployees(employees);
            }
        )
    }, []);
    const location = useLocation();
    const [access] = location.state;
    return(
        <>
            <NavBar />
            <EmployeeTable employees={employees} userAccess ={access} />
        </>
    )
}