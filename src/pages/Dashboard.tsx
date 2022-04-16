import PostForm from 'components/PostForm'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'typedhooks'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useAppSelector(state => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])
  return (
    <>
      <section className="heading">
        <h1>{user && user.name}'s Dashboard</h1>
      </section>
      <PostForm />
    </>
  )
}

export default Dashboard
