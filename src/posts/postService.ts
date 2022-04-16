import axios from 'axios'
import type { Post } from './postSlice'

const API_URL = '/api/posts/'

// create Post
const createPost = async (postData: Post, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, postData, config)

  return response.data
}

const postService = {
  createPost,
}

export default postService
