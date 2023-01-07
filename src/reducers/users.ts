import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
  users: any;
}

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<any>) => {
      return {
        users: action.payload,
      };
    },
    addUser: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    },
  },
});

export const { setUsers, addUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
