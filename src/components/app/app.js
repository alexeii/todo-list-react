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
            {label: 'Going to learn React', important: true, like: false, id: nextId()},
            {label: 'That is so good', important: false, like: false, id: nextId()},
            {label: 'I need a break...', important: false, like: false, id: nextId()}
        ],
        term: '',
        filter: 'all'
    }
    
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
        if (body.trim() === '') return null ;
        const newItem = {
            label: body,
            important: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
   /*  onToggleImportant = (id) => {
       this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    } */
    onToggle = (id, name) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = name === 'important' ? {...old, important: !old.important} : {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    searchPost = (items, term) => {
        if(term.length === 0) {
            return items;
        }
      return  items.filter(item => item.label.indexOf(term) > -1)
    }

    filterPost = (items, filter) => {
        if(filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onUpdataSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }



   render() {
       const {data, term, filter} = this.state;
       const liked = data.filter(elem => elem.like).length;
       const allPosts = data.length;
       const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return (
        <div className="app">
            <AppHeader liked={liked} allPosts={allPosts}/>
            <div className="search-panel d-flex">
                <SearchPanel
                    onUpdataSearch={this.onUpdataSearch}
                />
                <PostStatusFilter 
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                />
            </div>
            <PostList 
                posts={visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggle}
                onToggleLiked={this.onToggle}
            />
            <PostAddForm
                onAdd={this.addItem}
            />
        </div>
        
    )
   }
}

