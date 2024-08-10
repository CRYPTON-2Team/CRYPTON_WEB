import { create } from "zustand";

interface AuthStore {
  email: string;
  name: string;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
}

export const authStore = create<AuthStore>((set) => ({
  email: "",
  setEmail: (email: string) => set(() => ({ email })),
  name: "",
  setName: (name: string) => set(() => ({ name })),
}));
