import React from 'react';
import c from './Posts.module.css';
import Post from './Post/Post.js';

const Posts = () => {
    return <div>
        my posts
        <div>
            new posts
        </div>
        <div>
            <Post message={'Hi, how are you?'} likeCount={10}/>
            <Post message={'My first post'} likeCount={15}/>

        </div>
    </div>
}

export default Posts;