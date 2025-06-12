import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux';
import { RouterProvider } from 'react-router';
import router from './routes';

let container = document.getElementById("app")!;
let root = createRoot(container)
root.render(

  <Provider store={store} >
     <RouterProvider router={router} />
  
    </Provider>
  
);
