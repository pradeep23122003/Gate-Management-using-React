import React, { useState } from 'react';

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla",
  "Yemen", "Zambia", "Zimbabwe"
];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredCountries = countries.filter(country =>
      country.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredCountries);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setInputValue('');
    setSuggestions([]);
  };

  return (
    <div>
      <h2 className='main'>Autocomplete</h2>
      <div className='a7'>
      <input className='input'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Country"
      />
      </div>
      <ul>
        {suggestions.map((country, index) => (
          <li key={index} onClick={() => handleSelectCountry(country)}>
            {country}
          </li>
        ))}
      </ul>
      {selectedCountry && (
        <p>Selected Country: {selectedCountry}</p>
      )}
    </div>
  );
}

export default App;
