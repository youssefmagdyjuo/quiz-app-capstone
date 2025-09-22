import { create } from "zustand";
export const useOpenForm = create((set) => ({
    isVaisble: false,
    toggleVisible: () => set((state) => ({ isVaisble: !state.isVaisble })),
}));