import { Table, 
    Header,
    HeaderRow,
    HeaderCell,
    Row,
    Body,
    Cell, } from '@table-library/react-table-library/table';
import { useState } from 'react';
// const data = [
//     { id: 1, name: "Marv", phoneNumber: 1234567890, jobRole: "Employee", location: "Hartford", salary: 100000},
//     { id: 2, name: "Jeannie", phoneNumber: 1234567891, jobRole: "Manager", location: "St. Paul", salary: 100000},
//     { id: 3, name: "Rap", phoneNumber: 1234567892, jobRole: "HR", location: "St. Paul", salary: 200000},
//     { id: 4, name: "Ola", phoneNumber: 1234567893, jobRole: "HR", location: "Hartford", salary: 200000}
//   ]

export function EmployeeTable(props) {
    console.log("employees are", props.employees)

    const data = props.employees;
    const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

    const list = { nodes: data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ), };
    const accessLevel = props.access;
    console.log(`Access level is`, accessLevel);
    return (
        <>
        <label htmlFor="search">
        Search by Task:
        <input id="search" type="text" onChange={handleSearch} />
      </label>

        <Table data={list}>{(tableList) =>(
            <>
                <Header>
          <HeaderRow>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Phone Number</HeaderCell>
            <HeaderCell>Role</HeaderCell>
            <HeaderCell>Location</HeaderCell>
            <HeaderCell>Salary</HeaderCell>
          </HeaderRow>
        </Header> 
        <Body>
        {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>{item.name}</Cell>
                <Cell>{item.phoneNumber}</Cell>
                <Cell>{item.jobRole}</Cell>
                <Cell>{item.location}</Cell>
                <Cell>{item.salary}</Cell>
              </Row>
            ))}
        </Body>

            </>
        )
            
        
        
}
        </Table>
        </>

    )    
}

export function EmployeeTableManager(props) {
    console.log("employees are", props.employees)

    const data = props.employees;
    const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

    const list = { nodes: data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ), };
    const accessLevel = props.access;
    console.log(`Access level is`, accessLevel);
    return (
        <>
        <label htmlFor="search">
        Search by Task:
        <input id="search" type="text" onChange={handleSearch} />
      </label>

        <Table data={list}>{(tableList) =>(
            <>
                <Header>
          <HeaderRow>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Phone Number</HeaderCell>
            <HeaderCell>Role</HeaderCell>
            <HeaderCell>Location</HeaderCell>
            <HeaderCell>Salary</HeaderCell>
          </HeaderRow>
        </Header> 
        <Body>
        {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>{item.name}</Cell>
                <Cell>{item.phoneNumber}</Cell>
                <Cell>{item.jobRole}</Cell>
                <Cell>{item.location}</Cell>
                <Cell>{item.name === `Fake Jeannie` || item.name === `Horse` && item.salary}</Cell>
              </Row>
            ))}
        </Body>

            </>
        )
            
        
        
}
        </Table>
        </>

    )
}

export function EmployeeTableEmployee(props) {
    console.log("employees are", props.employees)

    const data = props.employees;
    const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

    const list = { nodes: data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ), };
    const accessLevel = props.access;
    console.log(`Access level is`, accessLevel);
    return (
        <>
        <label htmlFor="search">
        Search by Task:
        <input id="search" type="text" onChange={handleSearch} />
      </label>

        <Table data={list}>{(tableList) =>(
            <>
                <Header>
          <HeaderRow>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Phone Number</HeaderCell>
            <HeaderCell>Role</HeaderCell>
            <HeaderCell>Location</HeaderCell>
            <HeaderCell>Salary</HeaderCell>
          </HeaderRow>
        </Header> 
        <Body>
        {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>{item.name}</Cell>
                <Cell>{item.phoneNumber}</Cell>
                <Cell>{item.jobRole}</Cell>
                <Cell>{item.location}</Cell>
                <Cell>{item.name === `Jeannie` && item.salary}</Cell>
              </Row>
            ))}
        </Body>

            </>
        )
            
        
        
}
        </Table>
        </>

    )
}