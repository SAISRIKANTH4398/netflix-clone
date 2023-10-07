import React, {useState, useEffect} from 'react';
import axios from './axios';

function Row({title}) {

  const [movies, setMovies] = useState([]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default Row
