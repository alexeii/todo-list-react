import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/searchPanel';
import PostStatusFilter from '../post-status-filter/postStatusFilter';
import PostList from '../post-list/postList';
import PostAddForm from '../post-add-form/postAddForm';

import './app.css';

const App = () => {
    const data = [
        {label: 'Going to learn React', important: true, id : 'as'},
        {label: 'That is so good', important: false, id : 'asa'},
        {label: 'I need a break...', important: false, id : 'assd'}
    ]
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
        
    )
}

export default App;