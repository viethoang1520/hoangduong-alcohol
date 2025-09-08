import axiosClient from "./axiosClient"

export const getAllWines = async () => {
  return await axiosClient.get('/api/wine')
}

export const getWineById = async (id) => {
  return await axiosClient.get(`/api/wine/${id}`)
}