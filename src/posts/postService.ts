import axios from 'axios'
import type { Post } from './postSlice'

const API_URL = '/api/posts/'

// create a post
const createPost = async (postData: Post, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, postData, config)

  return response.data
}

// get all posts of user
const getPosts = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)

  return response.data
}

// delete a post
const deletePost = async (postId: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URL + postId, config)

  return response.data
}

const postService = {
  createPost,
  getPosts,
  deletePost,
}

export default postService
