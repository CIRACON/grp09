import './App.css';
import { PeopleList } from './PeopleList';
import {Route, Routes} from "react-router-dom"; 
import { PersonPage } from './PersonPage';
import { PlanetPage } from './PlanetPage';

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<PeopleList />} />
       <Route path="/person" element={<PersonPage />} />
       <Route path="/person/:id" element={<PersonPage />} />
       <Route path="/planet" element={<PlanetPage />} />
       <Route path="/planet/:id" element={<PlanetPage />} />
    </Routes>
    </> 
    );
}

export default App;
