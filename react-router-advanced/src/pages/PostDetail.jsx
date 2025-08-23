// src/pages/PostDetail.jsx
import { useParams, Link } from 'react-router-dom';


export default function PostDetail() {
const { postId } = useParams();


// Simulate loading the post by id; in real apps you would fetch here
const idNum = Number(postId);
const post = {
id: idNum,
title: `Post #${idNum}`,
body: `This is a dynamically-routed post with id ${idNum}.`
};


return (
<section>
<h1>{post.title}</h1>
<p>{post.body}</p>
<p><Link to="/posts">← Back to posts</Link></p>
</section>
);
}