import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux';
import { AddItem, RemoveItem } from '../redux/slice/abhaycart';

const Cart = () => {
    const items = useSelector((state: RootState) => state.abhaycart.cartitems);
    const dispatch = useDispatch<AppDispatch>();
  return (
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
                   <p className="product-rating">Quantity: {item.quantity}</p>
                 </div>
                 <div className="flex">
          <button className="ml-2 w-100 p-2 rounded bg-blue-200 hover:bg-blue-600 transition" onClick={() => dispatch(AddItem(item))}>+ </button>
          <button className="ml-2 w-100 p-2 rounded bg-white-700 ">{item.quantity}</button>
          <button className="ml-2 w-100 p-2 rounded bg-blue-200 hover:bg-blue-600 transition" onClick={() => dispatch(RemoveItem(item.id))}>-</button>
        </div>
                
               </div>
             ))
           ) : (
             <p>No products found</p>
           )}
         </div>
  )
}

export default Cart
