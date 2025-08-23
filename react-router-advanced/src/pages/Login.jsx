// src/pages/Login.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { useState } from 'react';


export default function Login() {
const { login } = useAuth();
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || '/profile';
const [username, setUsername] = useState('demo');


function handleLogin(e) {
e.preventDefault();
login(username || 'demo');
navigate(from, { replace: true });
}


return (
<section>
<h1>Login</h1>
<form onSubmit={handleLogin} style={{ display: 'grid', gap: 8, maxWidth: 320 }}>
<label>
Username
<input value={username} onChange={(e) => setUsername(e.target.value)} />
</label>
<button type="submit">Sign in</button>
</form>
<p style={{ opacity: 0.8, marginTop: 8 }}>
After login you will be redirected to your original destination.
</p>
</section>
);
}