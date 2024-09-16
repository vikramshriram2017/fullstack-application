// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Typography} from "@material-tailwind/react"

const Header = () => {
  return (
    <Navbar className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Typography variant='h5' className='text-red'>My MERN App</Typography>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link 
                to="/" 
                className="text-white hover:underline" 
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/register" 
                className="text-white hover:underline"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Navbar>
  );
};

export default Header;
