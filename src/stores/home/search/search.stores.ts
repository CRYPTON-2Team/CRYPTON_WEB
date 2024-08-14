import { MyFile } from "src/types/file/file.types";
import { create } from "zustand";

interface SearchType {
  file: MyFile[];
  setFile: (file: MyFile[]) => void;
}


interface FileName {
  fileName: string;
  setFileName: (fileName: string) => void;
}

export const searchStore = create<SearchType>((set) => ({
  file: [],
  setFile: (file: MyFile[]) => set(() => ({ file })),
}));

export const fileNameStore = create<FileName>((set) => ({
  fileName: "",
  setFileName: (fileName: string) => set(() => ({ fileName })),
}));

