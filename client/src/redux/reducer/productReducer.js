import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      let { quantity, ...rest } = action.payload;
      if (state.find((item) => item["rest"].id == rest.id)) {
        const matchIndex = state.findIndex(
          (item) => item["rest"].id == rest.id
        );
        state[matchIndex].quantity += quantity;
        state[matchIndex].totalAmount +=quantity * rest.productPrice;

      } else {
        state.push({ rest, quantity,totalAmount:quantity * rest.productPrice  });
      }
    },
    reduceProduct: (state, action) => {
      const matchIndex = state.findIndex(
        (item) => item["rest"].id == action.payload['rest'].id
      );   
       if(action.payload.quantity > 0 ){
       state[matchIndex].quantity -=1;
      state[matchIndex].totalAmount -=action.payload.rest.productPrice;
      }if(action.payload.quantity == 0){
           state.splice(matchIndex,1)
      }
    },
    filterOrder:(state,_) =>{
     return state.filter(product => product.quantity !==0)
    }

    
       
      
  },
});

export const { addProduct, reduceProduct,filterOrder } = ProductSlice.actions;
export default ProductSlice.reducer;
