import { colors } from '@/app/components/constants'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chosenColor: colors[0]
    

}

const toolBoxSlice = createSlice({
  name: 'toolbox',
  initialState,
  reducers: {
    chooseColorClick:(state,action)=>{
        state.chosenColor =action.payload
        console.log(state.chosenColor =action.payload)
    }
  },
})

export const {chooseColorClick  } = toolBoxSlice.actions
export default toolBoxSlice.reducer