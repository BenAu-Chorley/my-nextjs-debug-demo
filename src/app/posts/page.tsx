// This is a Server Component (default in App Router)
interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  // This runs on the server
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts: Post[] = await res.json();
  
  console.log('Server: Fetched posts', posts.length); // Server-side log
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Posts (Server Component)</h1>
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.id} className="border p-4 rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
