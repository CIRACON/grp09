//use useParams 
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function PersonPage() {
    const params = useParams()
    const [foundPerson, setFoundPerson] = useState({})
    const [planetId, setPlanetID] = useState({})
    let dummyPerson = {};

    const getIdFromUrl = (entityName, url) => {
        //debugger
        const re = new RegExp(`.*${entityName}\/(\\d+).*`);
        const matches = url.match(re)
        if (!matches) throw `Bad URL. Not a ${entityName} URL.`
        return matches[1]
    }
    const getFilmIdFromUrl = url => getIdFromUrl("films", url)
    const getPlanetIdFromUrl = url => getIdFromUrl("planets", url)

    //   console.log(`dummy planet is ` + dummyPlanet)

    //    debugger;
    async function fetchPerson() {
        try {
            let url = `https://swapi.dev/api/people/${params.id}`;
            const fetchedPerson = await fetch(url)
                .then(res => res.json())
            // dummyPerson = fetchedPerson 
            // setPlanetID(getPlanetIdFromUrl(fetchedPerson?.homeworld))
            console.log({fetchedPerson})
            fetchedPerson.planetId = getPlanetIdFromUrl(fetchedPerson?.homeworld)
            console.log('printing planetid', fetchedPerson.planetId)
            setFoundPerson(fetchedPerson)
            console.log(fetchedPerson)
            console.log(foundPerson)
            console.log(`homeworld url is ` + fetchedPerson.homeworld)
        }
        catch (ex) {
            console.error(`Error reading person ${params.id} data.`, ex.message);
        }
        // setFoundPerson(dummyPerson)
    }

    useEffect(() => { fetchPerson() }, [])

    // need this guy 
    console.log(params.id);

    let dummyPlanet = -1
    // useEffect( ()=> {getPlanetIdFromUrl(foundPerson.homeworld)}, [])


    //   console.log(`Homeworld is ` + getPlanetIdFromUrl(foundPerson.homeworld))
    //   const [planetID,setPlanetID] = useState(-1)
    //   setPlanetID(getPlanetIdFromUrl(foundPerson.homeworld));

    //  console.log(`planet ID is ` + getPlanetIdFromUrl(foundPerson.homeworld))
    console.log(`planet id is ` + planetId)
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
                <p><span id="homeworld">{foundPerson.planetId}</span></p>
            </section>
            <section id="films">
                <h3>Films appeared in</h3>
                <ul></ul>
            </section>
        </>
    )
}