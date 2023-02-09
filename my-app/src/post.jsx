import React from "react";

const Post = (props) => {
    return(
        <div className="POST">
             <div className="post--title">
                <h2>{props.title}</h2>
            </div>
            <div className="post--body">
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default Post;