
import Cart from '../Components/Cart';
import { App } from "../App";
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
]);

export default router;
