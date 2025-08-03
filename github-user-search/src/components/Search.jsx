import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchUserData(username, location, minRepos); // Make sure fetchUserData supports these params
      setUsers(data.items); // Assuming GitHub API v3 `search/users`
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded-md">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full px-4 py-2 border rounded-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          className="w-full px-4 py-2 border rounded-md"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user(s).</p>}

      {users.map((user) => (
        <div key={user.id} className="p-4 border-b">
          <div className="flex items-center space-x-4">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <div>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">
                {user.login}
              </a>
              <p className="text-sm text-gray-600">Score: {user.score}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
