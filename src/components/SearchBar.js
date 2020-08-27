import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import './SearchBar.css';

const SearchBar = ({ hideButtons = false }) => {
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        history.push('/search');
    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search__buttonsHidden">
                    <Button type="submit" onClick={search} variant="outlined">
                        Google Search
                    </Button>
                    <Button variant="outlined">Google Search</Button>
                </div>
            ) : (
                <div className="search__buttonsHidden">
                    <Button type="submit" onClick={search} variant="outlined">
                        Google Search
                    </Button>
                    <Button variant="outlined">Google Search</Button>
                </div>
            )}
        </form>
    );
};

export default SearchBar;