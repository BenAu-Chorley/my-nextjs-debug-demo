'use client'  // This directive makes it a Client Component

import { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    console.log('Client: Before increment', count); // Client-side log
    setCount(count + 1);
    console.log('Client: After increment', count + 1);
  };
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Counter (Client Component)</h1>
      <div className="space-y-4">
        <p className="text-xl">Count: {count}</p>
        <button 
          onClick={handleIncrement}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
