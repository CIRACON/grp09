// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { EmployeeDirectory } from './EmployeeDirectory';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<EmployeeDirectory />} />
    </Routes>
    </>
  );
}

export default App;
