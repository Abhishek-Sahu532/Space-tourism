import React from 'react';
import Navbar from './Components/Navbar'


export const Layout = ({ children }) => {
  return (
    <div className=" ">
      <header className="relative ">
        <Navbar />
      </header>
      <main >
        {children}
      </main>
    </div>
  );
};