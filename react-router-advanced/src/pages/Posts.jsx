// src/pages/Posts.jsx
import { Link } from 'react-router-dom';


const MOCK_POSTS = [
{ id: 1, title: 'Hello Router', excerpt: 'Intro to routing…' },
{ id: 2, title: 'Nested Routes FTW', excerpt: 'Outlets and more…' },
{ id: 3, title: 'Protected Routes', excerpt: 'Gating access…' },
];


export default function Posts() {
return (
<section>
<h1>Posts</h1>
<ul style={{ padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
{MOCK_POSTS.map(p => (
<li key={p.id} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 12 }}>
<strong>{p.title}</strong>
<p style={{ margin: '6px 0' }}>{p.excerpt}</p>
<Link to={`/posts/${p.id}`}>Read more →</Link>
</li>
))}
</ul>
</section>
);
}