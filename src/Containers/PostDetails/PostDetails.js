import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { postID } = useParams();
    const [comments ,setComments] = useState([]);
    const [posts ,setPosts] = useState([]);
    console.log("title",posts.title);

    console.log("post", posts);
    

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments/${postID}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setComments(data) )
    }, []);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postID}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setPosts(data) )
    }, []);


    return (
        <div>
            <h1>this is post details page </h1>
            <h2>id : {postID}</h2>
            {/* <p><strong>name: </strong> {comments.name}</p> */}
            <p>this is  name of post maker{posts.title}</p>
        
        </div>
    );
};

export default PostDetails;