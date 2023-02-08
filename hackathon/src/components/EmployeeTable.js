
const data = [
    { name: "Marv", phoneNumber: 1234567890, jobRole: "Employee", location: "Hartford", salary: 100000},
    { name: "Jeannie", phoneNumber: 1234567891, jobRole: "Manager", location: "St. Paul", salary: 100000},
    { name: "Rap", phoneNumber: 1234567892, jobRole: "HR", location: "St. Paul", salary: 200000},
    { name: "Ola", phoneNumber: 1234567893, jobRole: "HR", location: "Hartford", salary: 200000}
  ]

export function EmployeeTable() {

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
                data.map((val, key) => {
                    return (
                    <tr key ={key}>
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