import './App.css';
import { PeopleList } from './PeopleList';
import {Route, Routes} from "react-router-dom"; 
import { PersonPage } from './PersonPage';

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<PeopleList />} />
       <Route path="/person" element={<PersonPage />} />
    </Routes>
    </> 
    );
}

export default App;
