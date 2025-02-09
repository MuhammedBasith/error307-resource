'use client';


import { useEffect } from 'react';

export default function Error307() {
  useEffect(() => {
    // Trigger the download by navigating to the API route.
    window.location.href = '/api/download'; // This triggers the download
  }, []);

  return (
    <div>
      <h1>Redirecting to download...</h1>
    </div>
  );
}
