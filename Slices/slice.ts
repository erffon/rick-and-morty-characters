import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    favCharacter: string
}

const initialState: CounterState = {
    favCharacter: "Guest",
}

const favouritSlice = createSlice({
  name: 'favCharacterName',
  initialState,
  reducers: {
    
    setUserFavourit: (state, action: PayloadAction<string>) => {
      document.cookie = `favouritCharacter = ${action.payload}; expires=Thu, 18 Dec 2050 12:00:00 UTC;`;
      state.favCharacter = document.cookie.split("=")[1];
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUserFavourit } = favouritSlice.actions

export default favouritSlice.reducer