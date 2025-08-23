// src/api/client.js
export const API_BASE = 'https://jsonplaceholder.typicode.com';


export async function apiGet(path) {
const res = await fetch(`${API_BASE}${path}`);
if (!res.ok) {
const text = await res.text();
throw new Error(`API ${res.status}: ${text}`);
}
// JSONPlaceholder returns JSON
return res.json();
}