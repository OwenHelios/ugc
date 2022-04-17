import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'store'
import postService from './postService'
// get user from local storage
const userJson = localStorage.getItem('user') || JSON.stringify('')
const user = JSON.parse(userJson)

interface State {
  posts: any[]
  isError: boolean
  success: boolean
  isLoading: boolean
  message: string
}

export interface Post {
  title: string
  id?: string
}

const initialState: State = {
  posts: [],
  isError: false,
  success: false,
  isLoading: false,
  message: '',
}

// create new post
export const createPost = createAsyncThunk<Post, Post, { state: RootState }>(
  'posts/create',
  async (postData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.createPost(postData, token)
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

// get user posts
export const getPosts = createAsyncThunk<
  Post[],
  undefined,
  { state: RootState }
>('posts/getAll', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await postService.getPosts(token)
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//delete a post
export const deletePost = createAsyncThunk<Post, string, { state: RootState }>(
  'posts/delete',
  async (postId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.deletePost(postId, token)
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

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(createPost.pending, state => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        state.posts.push(action.payload)
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.error.message || 'error creating post'
      })

    builder
      .addCase(getPosts.pending, state => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        state.posts = action.payload
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.error.message || 'error fetching posts'
      })

    builder
      .addCase(deletePost.pending, state => {
        state.isLoading = true
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        state.posts = state.posts.filter(post => post._id !== action.payload.id)
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.error.message || 'error deleting posts'
      })
  },
})

export const { reset } = postSlice.actions
export default postSlice.reducer
