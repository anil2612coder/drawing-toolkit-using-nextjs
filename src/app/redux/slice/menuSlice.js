// counterSlice.js
import { menu_items } from '@/app/components/constants';
import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    activeMenuItem: menu_items[0],
    actionMenuItem:null
}

const menuSlice = createSlice({
  name: 'menu',
  initialState, 
  reducers: {
   menuItemClick:(state, action)=>{
    state.activeMenuItem = action.payload
   },
  actionItemClick:(state, action)=>{
    state.actionMenuItem = action.payload
   }
  },
});

export const { menuItemClick,actionItemClick } = menuSlice.actions;
export default menuSlice.reducer;


