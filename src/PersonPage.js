//use useParams 
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function PersonPage() {

    const [foundPerson, setFoundPerson] = useState({})
    useEffect(( ()=> fetchPerson(), []))
    const params = useParams()
    async function fetchPerson(id) {
        let url = `https://swapi.dev/api/people/${id}`;
        try {
            foundPerson = await fetch(url)
            .then(res => res.json())
        }
        catch (ex) {
          console.error(`Error reading person ${id} data.`, ex.message);
        }
        
      }
      fetchPerson(params.id)

      console.log(foundPerson.name);

// yuo can find all params from here
console.log(params.id)

    return (
        <>
        <h1 id="name"></h1>
    <section id="generalInfo">
      <p>Height: <span id="height"></span> cm</p>
      <p>Mass: <span id="mass"></span> kg</p>
      <p>Born: <span id="birth_year"></span></p>
    </section>
    <section id="planets">
      <h2>Homeworld</h2>
      <p><span id="homeworld"></span></p>
    </section>
    <section id="films">
      <h2>Films appeared in</h2>
      <ul></ul>
    </section>
 </>
    )
}