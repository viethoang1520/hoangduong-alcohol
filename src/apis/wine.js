import axiosClient from "./axiosClient"

export const getAllWines = async () => {
  return await axiosClient.get('/api/wine')
}