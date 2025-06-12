import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { AppDispatch, RootState } from './redux';
import { IncrementCount, DecrementCount, ClearCount } from './redux/slice/abhaycart';
import { AddItem, RemoveItem,fetchCart} from './redux/slice/abhaycart';
import { useEffect } from 'react';
import HookUseCallback from './Components/HookUseCallback';
import { useNavigate } from 'react-router';


export function App() {
  const count = useSelector((state: RootState) => state.abhaycart.count);
  const items = useSelector((state: RootState) => state.abhaycart.items);
  const cartitems = useSelector((state: RootState) => state.abhaycart.cartitems);
  const dispatch = useDispatch<AppDispatch>();
  const navigate=useNavigate()

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1> Cart Store</h1>
      <p>Total Items: {items.length}</p>
      <p> Items in cart:<button className="ml-2 p-2 rounded bg-blue-200 hover:bg-blue-600 transition" onClick={() => navigate("/cart")}>{cartitems.length}</button> </p>
      {/* <HookUseCallback /> */}

      {/* <div className="button-container">
        <button onClick={() => dispatch(IncrementCount())}>Increment</button>
        <button onClick={() => dispatch(DecrementCount())}>Decrement</button>
        <button onClick={() => dispatch(ClearCount())}>Clear</button>
      </div> */}

      <h2>Product List</h2>
      <div className="product-list">
        {items && items.length > 0 ? (
          items.map((item: any) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.title} className="product-image" />
              <div className="product-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="product-price">${item.price}</p>
                <p className="product-rating">Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
              </div>
             
                <div className='flex'>
                <button className="ml-2 w-100 p-2 rounded bg-blue-200 hover:bg-blue-600 transition" onClick={() => dispatch(AddItem(item))}>Add to Cart</button>
                <button className="ml-2 w-100 p-2 rounded bg-blue-200 hover:bg-blue-600 transition" onClick={() => dispatch(RemoveItem(item.id))}>Remove from Cart</button>
                </div>
   
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
