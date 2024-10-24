import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country ,handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    // console.log(handleVisitedCountry);
    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code:{cca3}</small></p>

            {/* () =>handleVisitedCountry(country)  ==array */}
            <button onClick={handleVisitedCountry}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going' } </button>
            {visited ?  ' I have visited this country. ' : ' I want to Visit.'}
            <hr />
            <CountryDetail>
                country={country}
                hand
            </CountryDetail>
        </div>
    );
};

export default Country;