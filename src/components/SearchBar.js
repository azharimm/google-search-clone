import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import './SearchBar.css';

const SearchBar = () => {
    const [input, setInput] = useState('')
    const search = e => {
        e.preventDefault();
    }

    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" />
                <MicIcon />
            </div>
            <div className="search__buttons">
                <Button onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">Google Search</Button>
            </div>
        </div>
    );
};

export default SearchBar;
