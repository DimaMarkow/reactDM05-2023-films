import React, { useState } from 'react';

const SearchBar = ({ setSearchParams, initMovie }) => {
  const [searchText, setSearchText] = useState(initMovie || '');

  const onChange = e => {
    const { value } = e.currentTarget;
    setSearchText(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (searchText) {
      setSearchParams({ query: searchText.toLowerCase() });
    }
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <p className="navbar-brand"></p>
        <form className="d-flex" role="search" onSubmit={onSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={onChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
