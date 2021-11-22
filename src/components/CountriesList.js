import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  return (
    <div>
      {countries.map((country) => {
        return (
          <Link to={`/countries/${country.cca3}`}>
            <h6>
              {country.flag} {country.name.common}
            </h6>
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
