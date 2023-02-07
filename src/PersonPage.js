//use useParams 
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export function PersonPage() {
    const params = useParams()
    const [foundPerson, setFoundPerson] = useState({})
    let dummyPerson = {};

    let url = `https://swapi.dev/api/people/${params.id}`;

    useEffect( ()=> {fetchPerson()}, [])
   
    async function fetchPerson() {
        try {
            const fetchedPerson = await fetch(url)
            .then(res => res.json())
            dummyPerson = fetchedPerson
        }
        catch (ex) {
          console.error(`Error reading person ${params.id} data.`, ex.message);
        }
        setFoundPerson(dummyPerson)
    }

      console.log(dummyPerson)
      console.log(foundPerson);
      
      // need this guy 
      console.log(params.id);

    return (
        <>
            <h1 id="name"></h1>
            <section id="generalInfo">
                <h2>{foundPerson.name}</h2>
                <p>Height: <span id="height">{foundPerson.height}</span> cm</p>
                <p>Mass: <span id="mass">{foundPerson.mass}</span> kg</p>
                <p>Born: <span id="birth_year">{foundPerson.birth_year}</span></p>
            </section>
            <section id="planets">
                <h3>Homeworld</h3>
                <p><span id="homeworld"></span></p>
            </section>
            <section id="films">
                <h3>Films appeared in</h3>
                <ul></ul>
            </section>
        </>
    )
}