import { useState } from 'react';

const Search = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '2px',
        }}
      >
        <input
          type="text"
          id="searchBox"
          value={term}
          onChange={handleChange}
          style={{
            borderRadius: '5px',
          }}
        />
        {/* {term.length < 3 && `term must be longer`} */}
        <button
          style={{
            borderRadius: '5px',
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
