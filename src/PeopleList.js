import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function PeopleList() {
  const [persons, setPersons] = useState([]);
  let dummyPersons = [];  

  let url = 'https://swapi.dev/api/people';

    useEffect(() => {getPeople()}, [])

    async function getPeople(){
      while (url) {
        try {
          const fetchedPersons = await fetch(url)
            .then(res => res.json())
            .then(res => { url = res.next; return res })
            .then(res => res.results)
            .then(res => res.map(p => ({ ...p, id: +getPersonIdFromUrl(p.url) })))
            dummyPersons.push(...fetchedPersons);
        }
        catch (ex) {
          console.error("Error reading people.", ex.message);
        }
        }
        setPersons(dummyPersons)
    }

    const getPersonIdFromUrl = (url) => {
      const re = /.*people\/(\d+).*/
      const matches = url.match(re)
      if (!matches) throw "Bad URL. Not a people URL."
      return matches[1]
    }

    console.log("All the persons are ", persons)
      return (
        <>
          <div>
            <h1>Star Wars Universe Lookup</h1>
            
            <label for="searchString">Who you looking for? <span className="small">(Regular expressions are cool
                here)</span></label>
            <input id="searchString"  autoComplete="off" />
          </div>

          <section id="people">
            {persons.length > 0 && 
            persons.map(person => <div key={person.id}>
                <Link to="/person">{person.name} {person.id} </Link>
            </div>)
            }
          </section>
        </>
      )
    }

    

