import React, {useEffect, useState} from "react";

function Database() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error("Error fetching tasks:", error));

        fetch("http://localhost:5000/comments")
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) => console.error("Error fetching tasks:", error));
        }, []);

        
    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title} - <strong>by {post.author}</strong>
                    </li>
                ))}
            </ul>

            <h1>Comment List</h1>
            <ul>
                {comments.map((comment) =>(
                    <li key={comment.id}>
                        {comment.body} - <strong>by {comment.postId}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Database;