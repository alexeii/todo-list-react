import React from 'react';
import PostListItem from '../post-list-item/postListItem';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleLiked, onToggleImportant}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li className="list-group-item" key={id}>
                <PostListItem 
                    {...itemProps} 
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id, 'important')}
                    onToggleLiked={() => onToggleLiked(id, 'like')}
                />
            </li>
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;