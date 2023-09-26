import axios from 'axios';
// import { configDotenv } from 'dotenv';
// configDotenv;

// import dotenv from 'dotenv';

// dotenv.config();

// const accessKey = process.env.ACCESS_KEY;

// const secretKey = process.env.SECRET_KEY;

const accessKey = import.meta.env.VITE_REACT_APP_UNSPLASH_ACCESS_KEY;
/* const secretKey = import.meta.env.VITE_REACT_APP_UNSPLASH_SECRET_KEY; */

// const secretKey = process.env.SECRET_KEY;

const searchImages = async (term) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      params: {
        query: term,
      },
    });
    console.log(response);
    return response.data.results;
  } catch (e) {
    console.log(e);
  }
};

export default searchImages;
