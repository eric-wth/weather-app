import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState(0);

  const submitData = (e) => {
    e.preventDefault();

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a99290f7b68f1481988241c36b7da59&units=metric`)
      .then((response) => {
        console.log(response);
        setTemp(response.data.main.temp);
      })
  }

  return (
    <div className='container'>
      <h1>Get the temperature of any country below</h1>
      <br />
      <form onSubmit={submitData}>
        <label htmlFor='city-name'>City name:</label>
        <input
          type='text'
          name='city_name'
          id='city-name'
          placeholder='Enter city name here'
          onChange={(e) => {setCity(e.target.value)}}
        />
        <button className='button'>Get temp</button>
      </form>

      <div>{temp} °C</div> {/* temp display goes here */}
    </div>
  )
}

export default App;