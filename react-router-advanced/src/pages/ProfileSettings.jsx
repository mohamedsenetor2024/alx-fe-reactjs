// src/pages/ProfileSettings.jsx
import { useAuth } from '../auth/AuthContext';




export default function ProfileSettings() {
    
const { logout } = useAuth();


return (
    
<div>
<h2>Profile Settings</h2>
<button onClick={logout}>Sign out</button>
</div>

);
}