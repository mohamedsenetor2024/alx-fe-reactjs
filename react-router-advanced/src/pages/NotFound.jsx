// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
export default function NotFound() {
return (
<section>
<h1>404 — Not Found</h1>
<p>Return <Link to="/">home</Link>.</p>
</section>
);
}