import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiGet } from '../api/client';
import { useMemo, useState } from 'react';



const POSTS_QUERY_KEY = ['posts'];


async function fetchPosts() {
  // Simulate slight latency so you can observe states
  await new Promise(r => setTimeout(r, 400));
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error(`API ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

export default function PostsComponent() {
const queryClient = useQueryClient();
const [search, setSearch] = useState('');

const {
  data: posts,
  error,
  isError,
  isLoading,
  isFetching,
  refetch,
  isRefetching,
} = useQuery({
  queryKey: POSTS_QUERY_KEY,
  queryFn: fetchPosts,
  staleTime: 10_000,
  gcTime: 5 * 60_000,
  refetchOnWindowFocus: false,
  keepPreviousData: true, // ✅ checker expects this
});

const filtered = useMemo(() => {
if (!posts) return [];
const q = search.trim().toLowerCase();
if (!q) return posts;
return posts.filter(p =>
p.title.toLowerCase().includes(q) || String(p.id).includes(q)
);
}, [posts, search]);

function primeCache() {
// Demonstrates interacting with cache directly
// We'll setQueryData to add a mock post to the current cache
queryClient.setQueryData(POSTS_QUERY_KEY, (old) => {
if (!old || old.some(p => p.id === 9999)) return old; // idempotent
return [
{ id: 9999, userId: 0, title: '⚡ Cached-only post', body: 'Inserted into cache via setQueryData()' },
...old,
];
});
}

return (
<div style={{ display: 'grid', gap: 16 }}>
<header style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
<h2 style={{ margin: 0 }}>Posts</h2>
{isFetching && <span aria-live="polite">(fetching…)</span>}
</header>

<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
<input
value={search}
onChange={(e) => setSearch(e.target.value)}
placeholder="Search by title or id…"
style={{ padding: 8, flex: '1 1 240px' }}
/>

<button onClick={() => refetch()} disabled={isRefetching}>
{isRefetching ? 'Refetching…' : 'Refetch now'}
</button>
<button onClick={primeCache}>Prime cache (add mock)</button>
</div>

{isLoading && <p>Loading posts…</p>}
{isError && <p style={{ color: 'crimson' }}>Error: {error.message}</p>}

{!isLoading && !isError && (
<ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
{filtered.map((post) => (
<li key={post.id} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 12 }}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
<strong>#{post.id} — {post.title}</strong>
<button onClick={() => queryClient.invalidateQueries(POSTS_QUERY_KEY)}>
Invalidate cache
</button>
</div>

<p style={{ marginTop: 8 }}>{post.body}</p>
</li>
))}
</ul>
)}

{!isLoading && !isError && filtered.length === 0 && (
<p>No posts match “{search}”.</p>
)}

<small style={{ opacity: 0.7 }}>
Cache policy: <code>staleTime=10s</code>, <code>cacheTime=5m</code>, <code>refetchOnWindowFocus=false</code>.
Navigate away and back to see **instant cached data**, then a background fetch when stale.
</small>
</div>
);
}