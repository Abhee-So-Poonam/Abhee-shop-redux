// abhaycart.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface AbhayCartState {
  items:any,
  count: number,
  loading:boolean,
  error:string | undefined,
  cartitems:any
}

interface ResponseState {
  data: any;
}

// Async thunk to fetch cart data
export const fetchCart = createAsyncThunk("abhaycart/fetchCart", async () => {
  const response = await fetch('https://fakestoreapi.com/products/');
  const json = await response.json();
  console.log(json);  // You can log the response data if needed
  return json;        // Return the fetched data
});

// Initial state
const initialState: AbhayCartState = {
  items:[],
  count: 0,
  loading:false,
  error:"",
  cartitems:[]
};

// Create slice
const abhaycartslice = createSlice({
  name: "abhaycart",
  initialState,
  reducers: {
    IncrementCount: (state) => {
      state.count += 1;
    },
    DecrementCount: (state) => {
      state.count -= 1;
    },
    ClearCount: (state) => {
      state.count = 0;
    },
    AddItem: (state, action: PayloadAction<any>) => {
      const item = action.payload;
      const existingItem = state.cartitems.find((i: any) => i.id === item.id);
      if (!existingItem) {
        state.cartitems.push({ ...item, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }
     
    },
    RemoveItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const index = state.cartitems.findIndex((i: any) => i.id === itemId);
      if (index !== -1) {
        const item = state.cartitems[index];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartitems.splice(index, 1);
        }
        
      }
    },
    ClearItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const index = state.cartitems.findIndex((i: any) => i.id === itemId);
      if (index !== -1) {
        const item = state.cartitems[index];
        state.count -= item.quantity;
        state.cartitems.splice(index, 1);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions
export const { IncrementCount, DecrementCount, ClearCount ,AddItem,RemoveItem,ClearItem} =
  abhaycartslice.actions;

// Export reducer
export default abhaycartslice.reducer;
