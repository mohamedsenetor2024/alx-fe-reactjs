// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import Profile from './components/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import ProfileInfo from "./components/ProfileInfo";




export default function App() {
return (
<Routes>
<Route element={<Layout />}> {/* shared layout */}
<Route index element={<Home />} />


{/* Dynamic routing: /posts/:postId */}
<Route path="posts" element={<Posts />} />
<Route path="posts/:postId" element={<PostDetail />} />


{/* Protected + Nested: /profile/... */}
<Route
path="profile"
element={
<ProtectedRoute>
<Profile />
</ProtectedRoute>
}
>
<Route index element={<ProfileDetails />} />
<Route path="details" element={<ProfileDetails />} />
<Route path="settings" element={<ProfileSettings />} />
</Route>


<Route path="login" element={<Login />} />
<Route path="*" element={<NotFound />} />
</Route>
</Routes>
);
}