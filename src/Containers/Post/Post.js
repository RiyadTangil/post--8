import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const { title, id, body } = props.post;
    const history = useHistory();

    const handleClick = (postId) => {
        const url = `/post/${postId}`;
        history.push(url);
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h2>id:{id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            {/* <Link to={"/post/" + id}> <button >show details</button></Link> */}
            <button onClick={()=> handleClick(id)}>with button</button>

        </div>
    );
};

export default Post;