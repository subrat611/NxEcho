import { create } from "zustand";

const useAuthStore = create((set) => ({
  status: false,
  userData: null,

  // Actions
  login: (user) =>
    set(() => ({
      status: true,
      userData: user,
    })),

  logout: () =>
    set(() => ({
      status: false,
      userData: null,
    })),
}));

export default useAuthStore;
