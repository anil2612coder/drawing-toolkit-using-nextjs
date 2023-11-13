import { colors } from '@/app/components/constants'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chosenColor: colors[0],
    size:3
}

const toolBoxSlice = createSlice({
  name: 'toolbox',
  initialState,
  reducers: {
    chooseColorClick:(state,action)=>{
        state.chosenColor =action.payload
        
    },
    chooseSizeClick:(state,action)=>{
        state.size =action.payload
      
    }
  },
})

export const {chooseColorClick,chooseSizeClick } = toolBoxSlice.actions
export default toolBoxSlice.reducer