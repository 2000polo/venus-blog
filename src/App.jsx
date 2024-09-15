import { useState } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/routes';
// import { Outlet } from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
