import axios from 'axios'

const withHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

// Lifehacks
export const getLifehacks = () => {
  return axios.get('/api/lifehacks/')
}

export const createLifehack = formData => {
  return axios.post('/api/lifehacks/', formData, withHeaders())
}

// Categories
export const getCategories = () => {
  return axios.get('/api/categories/')
}