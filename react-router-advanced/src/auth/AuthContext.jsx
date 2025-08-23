// src/auth/AuthContext.jsx
import { createContext, useContext, useEffect, useMemo, useState } from 'react';


const AuthContext = createContext(null);


export function AuthProvider({ children }) {
const [user, setUser] = useState(null);


useEffect(() => {
const raw = localStorage.getItem('demo_user');
if (raw) setUser(JSON.parse(raw));
}, []);


const login = (username = 'demo') => {
const u = { name: username };
setUser(u);
localStorage.setItem('demo_user', JSON.stringify(u));
};


const logout = () => {
setUser(null);
localStorage.removeItem('demo_user');
};


const value = useMemo(() => ({ user, isAuthenticated: !!user, login, logout }), [user]);
return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function useAuth() {
const ctx = useContext(AuthContext);
if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
return ctx;
}