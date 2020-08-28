import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import './Search.css';

const Search = () => {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);

    return (
        <div className="searchPage">
            <h1>Search Page</h1>
        </div>
    );
};

export default Search;
