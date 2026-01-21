import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Next.js Debugging Demo</h1>
      <nav className="space-y-2">
        <Link href="/posts" className="block text-blue-500 hover:underline">
          → Posts (Server Component Example)
        </Link>
        <Link href="/counter" className="block text-blue-500 hover:underline">
          → Counter (Client Component Example)
        </Link>
      </nav>
    </main>
  );
}
