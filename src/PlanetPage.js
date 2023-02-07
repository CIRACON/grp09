//use useParams 
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export function PlanetPage() {
    const params = useParams()
    const [foundPlanet, setFoundPlanet] = useState({})
    let dummyPlanet = {};

    let url = `https://swapi.dev/api/planets/${params.id}`;

    useEffect( ()=> {fetchPlanet()}, [])
   
    async function fetchPlanet() {
        try {
            const fetchedPlanet = await fetch(url)
            .then(res => res.json())
            dummyPlanet = fetchedPlanet
        }
        catch (ex) {
          console.error(`Error reading person ${params.id} data.`, ex.message);
        }
        setFoundPlanet(dummyPlanet)
    }

      console.log(dummyPlanet)
      console.log(foundPlanet);
      
      // need this guy 
      console.log(params.id);

    return (
        <>
            <h1 id="name"></h1>
            <section id="generalInfo">
                <h2>{foundPlanet.name}</h2>
                <p>{foundPlanet.climate}</p>
                <p>{foundPlanet.films}</p>
                <p>{foundPlanet.residents}</p>
            </section>
        </>
    )
}