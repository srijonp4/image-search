import { Header, Search, ImageList } from './components';
import './index.css';
import searchImages from './data/db';
import { useState } from 'react';

const App = () => {
  const [endResult, setEndResult] = useState([]);

  async function handleSubmit(term) {
    const result = await searchImages(term);
    console.log(result);
    setEndResult(result);
  }

  return (
    <div className="container">
      <Header />
      <Search onSubmit={handleSubmit} />
      <ImageList endResult={endResult} />
    </div>
  );
};

export default App;
