// src/pages/Profile.jsx
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';


const tabStyle = ({ isActive }) => ({
padding: '6px 10px',
borderRadius: 8,
textDecoration: 'none',
background: isActive ? '#ecfeff' : 'transparent',
});


export default function Profile() {
const { user } = useAuth();
return (
<section>
<h1>Profile</h1>
<p>Signed in as <strong>{user?.name}</strong></p>


<div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
<NavLink to="details" style={tabStyle}>Details</NavLink>
<NavLink to="settings" style={tabStyle}>Settings</NavLink>
</div>


<div style={{ marginTop: 16 }}>
<Outlet />
</div>
</section>
);
}