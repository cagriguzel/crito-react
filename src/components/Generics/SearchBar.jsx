import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input type="text" placeholder="Type to Search..." className="search-input" />
    </div>
  );
};

export default SearchBar;
