import axios from 'axios'
import router from '@/router'

const authUser = async () => {
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get('/api/v1/data/names', config).catch(err => {
    if (router.currentRoute.value.path == '/login') {
      router.push('/login')
      console.log(err.response.data.msg)
    } else {
      router.push('/')
    }
    return err.response
  })
  if (response.status === 200) {
    return response.data
  }
  return response
}

export default authUser
