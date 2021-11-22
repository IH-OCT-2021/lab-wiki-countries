import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const country = countries.find((place) => {
    return place.cca3 === props.match.params.country;
  });

  console.log(country);

  const FindCountry = (props) => {
    const country = countries.find((place) => {
      return place.cca3 === props.cca3;
    });

    return <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>;
  };

  return (
    <div style={{ position: 'fixed', right: 200 }}>
      <h2>{country.name.common}</h2>
      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area} square km</p>
      <ul>
        {country.borders.map((item) => {
          return (
            <li>
              <FindCountry cca3={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetails;
