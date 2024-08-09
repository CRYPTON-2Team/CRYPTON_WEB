import { create } from "zustand";

interface MainStore {
  pdfLink: string;
  setPdf: (pdfLink: string) => void;
}

export const mainStore = create<MainStore>((set) => ({
  pdfLink: "",
  setPdf: (pdfLink: string) => set(() => ({ pdfLink })),
}));
