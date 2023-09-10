import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2>Name : {name.common}</h2>
            <img src={flags.png} alt="coutry flag"  />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={handleVisited} className='button-visit'>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? 'I have visited this country' : 'I want to visit'
            }
        </div>
    );
};

export default Country;