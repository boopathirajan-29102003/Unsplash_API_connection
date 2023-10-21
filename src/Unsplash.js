import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';



const ACCESS_KEY = 'USE_YOUR_UNSPLASH_ACCESS_KEY';
const Unsplash = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');

  const fetchPhotos = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}`
    );
    setPhotos(res.data);
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" style={{
          backgroundColor: 'rgb(237, 237, 237)',
          height: '50px',
          width: '40%',
          fontSize: '20px',
          marginLeft: '30%',
          borderRadius: '20px'
        }} value={query} onChange={handleInputChange} placeholder='Search here by name' />
      </div>
      <PhotoList photos={photos} query={query} />
    </div>
  );
};


export default Unsplash;
