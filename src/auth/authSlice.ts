import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
// get user from local storage
const userJson = localStorage.getItem('user') || JSON.stringify('')
const user = JSON.parse(userJson)

interface State {
  user: any | null
  isError: boolean
  success: boolean
  isLoading: boolean
  message: string
}

const initialState: State = {
  user: user || null,
  isError: false,
  success: false,
  isLoading: false,
  message: '',
}

// register user
export const register = createAsyncThunk(
  'auth/register',
  async (user: any, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// log in user
export const login = createAsyncThunk(
  'auth/login',
  async (user: any, thunkAPI) => {
    try {
      return await authService.login(user)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false
      state.isError = false
      state.success = false
      state.message = ''
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.error.message || 'error registering user'
        state.user = null
      })
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.error.message || 'error logging in user'
        state.user = null
      })
      .addCase(logout.fulfilled, state => {
        state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
