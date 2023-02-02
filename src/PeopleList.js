export function PeopleList() {
    let persons = [];
    let url = 'https://swapi.dev/api/people';
    console.log(fetch(url));

    // const getPersonIdFromUrl = (url) => {
    //     const re = /.*people\/(\d+).*/
    //     const matches = url.match(re)
    //     if (!matches) throw "Bad URL. Not a people URL."
    //     return matches[1]
    //   }
    async function getPeople(){
        while (url) {
            try {
              const fetchedPersons = await fetch(url)
                .then(res => res.json())
                .then(res => { url = res.next; return res })
                .then(res => res.results)
                // .then(res => res.map(p => ({ ...p, id: +getPersonIdFromUrl(p.url) })))
              persons.push(...fetchedPersons);
            }
            catch (ex) {
              console.error("Error reading people.", ex.message);
            }
          }
          console.log("All the persons are ", persons)
    }

    getPeople();
   

      

      return (
        <>
            <div>
    <h1>Star Wars Universe Lookup</h1>
    
    <label for="searchString">Who you looking for? <span class="small">(Regular expressions are cool
        here)</span></label>
    <input id="searchString"  autocomplete="off" />
  </div>
  <section id="people">
        {persons.map(person => <div>
            {person.name}
        </div>)}
  </section>

        </>
      )
    }

    

