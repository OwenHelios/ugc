import { createPost } from 'posts/postSlice'
import { useState } from 'react'
import { useAppDispatch } from 'typedhooks'

const PostForm = () => {
  const [title, setTitle] = useState('')

  const dispatch = useAppDispatch()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    dispatch(createPost({ title }))
    setTitle('')
  }
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Add Post</button>
        </div>
      </form>
    </section>
  )
}
export default PostForm
