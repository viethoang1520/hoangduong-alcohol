import { create } from "zustand";

export const useWineStore = create(set => ({
  wineList: [],
  setWineList: (wineList) => {
    try {
      set({ wineList: wineList })
    } catch (error) {
      console.log(error)
    }
  }
}))