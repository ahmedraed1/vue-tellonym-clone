import axios from 'axios'

const getFriends = async id => {
  const { data } = await axios.get(`/api/v1/users/${id}/friends`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  return data
}

const follow = async id => {
  const { data } = await axios.put(
    `/api/v1/users/${id}/follow`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  )
  return data
}

export { getFriends, follow }
