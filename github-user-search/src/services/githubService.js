import axios from 'axios';

// export const fetchUserData = async (username) => {
//   const response = await axios.get(`https://api.github.com/users/${username}`);
//   return response.data;
// };

// const BASE_URL = 'https://api.github.com/search/users';

// export const searchUsers = async ({ username, location, minRepos }) => {
//   let query = '';
//   if (username) query += `${username} in:login`;
//   if (location) query += ` location:${location}`;
//   if (minRepos) query += ` repos:>=${minRepos}`;

//   const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`);
//   const data = await response.json();
//   return data;
// };




const BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    const queryParts = [];

    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    const query = queryParts.join(' ');
    const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`);

    if (!response.ok) {
      throw new Error('GitHub API error');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};
