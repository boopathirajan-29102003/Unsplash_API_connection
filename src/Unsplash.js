import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';



const ACCESS_KEY = 'LfGwka6RuNfHpZQkIyoclybhYeLFvTveTddwslu-6jM'; // Replace with your actual access key

const Unsplash = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');

  const fetchPhotos = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}`
    );
    setPhotos(res.data);
  };
  console.log(photos)
  useEffect(() => {
    fetchPhotos();
  }, []);


  const handleSearch = () => {
    setQuery(query);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={query} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <PhotoList photos={photos} query={query} />

    </div>
  );
};


export default Unsplash;
