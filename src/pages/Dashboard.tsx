import Card from 'components/Card'
import PostForm from 'components/PostForm'
import Spinner from 'components/Spinner'
import { getPosts, reset } from 'posts/postSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'typedhooks'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { user } = useAppSelector(state => state.auth)
  const { posts, isLoading, isError, message, success } = useAppSelector(
    state => state.posts
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }

    dispatch(getPosts())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) return <Spinner />
  return (
    <>
      <section className="heading">
        <h1>{user && user.name}'s Dashboard</h1>
      </section>
      <PostForm />
      <section className="content">
        {posts.length > 0 ? (
          <div className="posts">
            {posts.map(post => (
              <Card
                key={post._id}
                title={post.title}
                createdAt={post.createdAt}
                postId={post._id}
              />
            ))}
          </div>
        ) : (
          <h3>No post yet</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
