import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '..';

type SignInProps = {
  email: string;
  password: string;
};

const initialState = {
  isLogged: false,
  isLoading: false,
  msgError: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    logIn: state => {
      state.isLogged = true;
    },
    logOut: state => {
      state.isLogged = false;
    },
    setLoading: state => {
      state.isLoading = true;
    },
    removeLoading: state => {
      state.isLoading = false;
    },
    setMsgError: (state, { payload }: PayloadAction<string>) => {
      state.msgError = payload;
    },
    removeMsgError: state => {
      state.msgError = '';
    },
  },
});

export const authPlayer = ({ email, password }: SignInProps) => {
  return async (dispatch: AppDispatch) => {
    if (email === '' || password === '') {
      dispatch(setMsgError('Empty field'));
      return;
    }

    dispatch(setLoading());
    dispatch(removeMsgError());
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application / json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (response.status === 200 && response.ok) dispatch(logIn());
    else if (response.status !== 200 && response.ok === false) {
      const {
        error: { message },
      } = await response.json();
      switch (message) {
        case 'EMAIL_NOT_FOUND':
          dispatch(setMsgError('Wrong email or password'));
          break;
        case 'INVALID_EMAIL':
          dispatch(setMsgError('Invalid email'));
          break;
        default:
          dispatch(setMsgError('Something wrong, try again later'));
      }
    }
    dispatch(removeLoading());
  };
};

export const {
  logIn,
  logOut,
  setLoading,
  removeLoading,
  setMsgError,
  removeMsgError,
} = playerSlice.actions;

export default playerSlice.reducer;
