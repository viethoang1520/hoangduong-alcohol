import axios from "axios"

const baseURL = import.meta.env.VITE_APP_API_URL
export const login = async ({ username, password }) => {
  try {
    const url = `${baseURL}/auth/login`
    return await axios.post(url, {
      username, password
    })
  } catch (error) {
    console.log(error)
  }
}