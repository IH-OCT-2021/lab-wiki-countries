import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <CountriesList />
        <Switch>
          <Route
            exact
            path="/countries/:country"
            component={(props) => <CountryDetails {...props} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
