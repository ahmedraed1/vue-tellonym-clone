import axios from 'axios'

const getFriends = async username => {
  const { data } = await axios.get(`/api/v1/users/${username}/friends`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  return data
}

export default getFriends
