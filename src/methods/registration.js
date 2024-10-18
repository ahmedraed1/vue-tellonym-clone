import axios from 'axios'
import { useAuthUser } from '@/stores/auth'
import router from '../router/index'

const useLogin = async (email, password) => {
  const response = await axios
    .post('/api/v1/auth/login', {
      email: email,
      password: password,
    })
    .catch(err => {
      console.log(err)
      return err.response
    })
  if (response.status === 200) {
    localStorage.setItem('token', response.data.token)
    router.push('/feed')
  }
  return response.data
}
const useRegister = async (name, username, IsAgree, email, password) => {
  const response = await axios
    .post('/api/v1/auth/register', {
      name: name,
      isAgree: IsAgree,
      username: username,
      email: email,
      password: password,
    })
    .catch(err => {
      console.log(err)
      return err.response
    })
  if (response.status === 201) {
    localStorage.setItem('token', response.data.token)
    useAuthUser().setUser(response.data.user)
    router.push('/feed')
  }
  return response.data
}

export { useRegister, useLogin }
