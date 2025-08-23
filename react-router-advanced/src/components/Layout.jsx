// src/components/Layout.jsx
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';


const linkStyle = ({ isActive }) => ({
padding: '6px 10px',
borderRadius: 8,
textDecoration: 'none',
background: isActive ? '#eef2ff' : 'transparent',
});


export default function Layout() {
const { isAuthenticated, user, logout } = useAuth();


return (
<div style={{ maxWidth: 960, margin: '32px auto', padding: 16 }}>
<header style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
<Link to="/" style={{ fontWeight: 700, fontSize: 18 }}>Router Advanced</Link>
<nav style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
<NavLink to="/" style={linkStyle} end>Home</NavLink>
<NavLink to="/posts" style={linkStyle}>Posts</NavLink>
<NavLink to="/profile" style={linkStyle}>Profile</NavLink>
{isAuthenticated ? (
<button onClick={logout} style={{ marginLeft: 8 }}>Logout {user?.name}</button>
) : (
<NavLink to="/login" style={linkStyle}>Login</NavLink>
)}
</nav>
</header>


<main style={{ marginTop: 16 }}>
<Outlet />
</main>


<footer style={{ opacity: 0.7, marginTop: 32 }}>Demo of nested, dynamic, and protected routes.</footer>
</div>
);
}