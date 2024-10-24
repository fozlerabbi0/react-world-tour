import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to ypur visited country');
        const newVisitedCountry =[...visitedCountries, country];
        setVisitedCountries(newVisitedCountry)       
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    
    //  remove item form an array in astate
    //  use filter to select all the element except the one you want to remove
    

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country */}
            <div>
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ul>
                    {/* {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    } */}
                </ul>
            </div>
            <div className="flag-container">
                    {
                        visitedFlags.map(flag => <img src={flag} alt="" /> )
                    }
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                         key={country.cca3} 
                         handleVisitedCountry={handleVisitedCountry}
                         handleVisitedFlags={handleVisitedFlags}
                         country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;