import React from 'react';

export function EmployeeTable(props) {
    console.log(props)
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Job Role</th>
                <th>Work Location</th>
                <th>Salary</th>
            </tr>
            {
                props.employees.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.phoneNumber}</td>
                            <td>{val.jobRole}</td>
                            <td>{val.location}</td>
                            <td>{val.salary}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}