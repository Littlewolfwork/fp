import React from 'react';
import c from './Post.module.css';


const Post = (props) => {
    return <div>
        {props.message}
        <div>{props.likeCount}</div>
    </div>
}

export default Post;