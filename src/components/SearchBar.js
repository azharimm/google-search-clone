import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { actionTypes } from '../reducer';
import './SearchBar.css';

const SearchBar = ({ hideButtons = false }) => {
    const [{ term }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (term) {
            setInput(term);
        }
    }, [term]);

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });

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
                <div className="search__buttons">
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
