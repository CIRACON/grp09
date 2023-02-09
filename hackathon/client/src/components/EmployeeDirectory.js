import { NavBar } from './NavBar';
import { EmployeeTable } from './EmployeeTable';
import { getEmployees } from './rest';
import React, { useState, useEffect } from 'react';


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
    return(
        <>
            <NavBar />
            <EmployeeTable employees={employees} />
        </>
    )
}