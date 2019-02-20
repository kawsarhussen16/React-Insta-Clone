import React from 'react';
import Post from './Post';

const PostContainer= (props) => {
    return(
        <div>
            {props.posts.map(item=> <Post key ={item.imageUrl} post ={item} />)}
        </div>
        );
};   
export default PostContainer; 