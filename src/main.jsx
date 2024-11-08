// Import React and ReactDOM for rendering the application
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import global styles
import './index.css';

// Import RouterProvider and router configuration
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

// Render the application inside the 'root' element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
