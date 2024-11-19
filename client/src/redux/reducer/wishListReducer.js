import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const WishlistSlice = createSlice({
  name: "wishList",
  initialState: initialState,
  reducers: {
    addToWishlist: (state, action) => {
        state.push(action.payload); 
    },  
  },
});

export const { addToWishlist} = WishlistSlice.actions;
export default WishlistSlice.reducer;
