
// src/components/Home.jsx
import React from 'react';
import Header from './Header';

const Home = () => {
  return (
  <>
  <Header/>
    <main className="p-4">
      <h2 className="text-xl font-semibold">Welcome to the Home Page</h2>
      <p className="mt-2">This is where you can place content for the home page.</p>
    </main>
    </>
  );
};

export default Home;
