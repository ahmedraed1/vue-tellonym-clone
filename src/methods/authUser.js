import axios from 'axios'
import { useAuthUser } from '@/stores/auth'

const authUser = async () => {
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get('/api/v1/user/auth', config).catch(err => {
    return err.response
  })

  useAuthUser().setUser(response.data.user)
  return response
}

export default authUser
