import React from 'react';
import { observer } from 'mobx-react-lite';

import Header from '../Header';
import SearchForm from '../SearchForm';
import s from './SearchComponent.module.css';

type SearchComponentProps = {
    placeholder: string,    
}

const SearchComponent: React.FC<SearchComponentProps> = observer(({ placeholder }) => {
    return (
        <div className={ s.searchComponent }>
            <Header title="Check the weather in your city" />
            <SearchForm placeholder="Enter here..." />

        </div>

    )
});

export default SearchComponent;