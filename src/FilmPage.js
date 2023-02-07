import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function FilmPage(){
    const params = useParams();
    const [foundFilm, setFilm] = useState({})
    let dummyFilm = {};

    let url = `https://swapi.dev/api/films/${params.id}`;

    useEffect( ()=> {fetchPerson()}, [])

    async function fetchFilm(){
        try {
            const fetchedFilm = await fetch(url)
            .then(res => res.json())
            dummyFilm = fetchedFilm
        }
        catch (ex) {
          console.error(`Error reading film ${params.id} data.`, ex.message);
        }
        setFoundFilm(dummyFilm)
    }

    return (
        <>
            <h1 id="name"></h1>
            <section id="generalInfo">
                <h2>{foundFilm.title}</h2>
                <p>Height: <span id="height"></span> cm</p>
                <p>Mass: <span id="mass"></span> kg</p>
                <p>Born: <span id="birth_year"></span></p>
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