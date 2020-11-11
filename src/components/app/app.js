import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/searchPanel';
import PostStatusFilter from '../post-status-filter/postStatusFilter';
import PostList from '../post-list/postList';
import PostAddForm from '../post-add-form/postAddForm';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
        
    )
}

export default App;