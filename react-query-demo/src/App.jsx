// src/App.jsx
// If you installed the legacy name `react-query`:
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PostsComponent from './components/PostsComponent';


// You can surface React Query Devtools if installed
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      gcTime: 5 * 60 * 1000, // ✅ correct for v5
    },
  },
});


export default function App() {
return (
<QueryClientProvider client={queryClient}>
<div style={{ maxWidth: 960, margin: '40px auto', padding: 16 }}>
<h1>React Query — JSONPlaceholder Posts</h1>
<p style={{ marginTop: -8, opacity: 0.8 }}>
Fetch, cache, refetch, and manipulate cache with <code>useQuery</code>.
</p>
<hr style={{ margin: '16px 0 24px' }} />
<PostsComponent />
</div>


{/* Optional Devtools if installed */}
{/* <ReactQueryDevtools initialIsOpen={false} /> */}
</QueryClientProvider>
);
}