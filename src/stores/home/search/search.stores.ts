import { MyFile } from "src/types/file/file.types";
import { create } from "zustand";

interface SearchType {
  file: MyFile[];
  setFile: (file: MyFile[]) => void;
}


export const searchStore = create<SearchType>((set) => ({
  file: [],
  setFile: (file: MyFile[]) => set(() => ({ file })),
}));


