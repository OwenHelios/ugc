import { useEffect, useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from 'auth/authSlice'
import Spinner from 'components/Spinner'
import { useAppDispatch, useAppSelector } from 'typedhooks'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { user, isError, success, isLoading, message } = useAppSelector(
    state => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (success || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, success, message, navigate, dispatch])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  if (isLoading) return <Spinner />
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Log in
        </h1>
        <p>Please fill out account information</p>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="User email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="User password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
