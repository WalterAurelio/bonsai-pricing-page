import { create } from "zustand";

export const useIsMonthly = create((set) => ({
  isMonthly: true,
  setIsMonthly: (bool) => {
    set({ isMonthly: bool });
  }
}));