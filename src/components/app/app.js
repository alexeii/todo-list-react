import React, {Component} from 'react';
import nextId from "react-id-generator";
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/searchPanel';
import PostStatusFilter from '../post-status-filter/postStatusFilter';
import PostList from '../post-list/postList';
import PostAddForm from '../post-add-form/postAddForm';

import './app.css';

export default class App extends Component   {
     
    state = {
        data : [
            {label: 'Going to learn React', important: true, id : 1},
            {label: 'That is so good', important: false, id : 2},
            {label: 'I need a break...', important: false, id : 3}
        ]
    }
    maxId = nextId();
    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            return{
                data: newArr
            }
        });
    }
    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
   render() {
        return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList 
                posts={this.state.data}
                onDelete={this.deleteItem}
            />
            <PostAddForm
                onAdd={this.addItem}
            />
        </div>
        
    )
   }
}

