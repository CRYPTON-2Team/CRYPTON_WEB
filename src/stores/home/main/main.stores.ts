import { create } from "zustand";

interface MainStore {
  pdfLink: string;
  setPdf: (pdfLink: string) => void;
}

interface FileStore {
  file: FormDataEntryValue;
  fileName: string;
  fileSize: number;
  mimeType: string;
  metadataId: string;
  setFile: (file: FormDataEntryValue) => void;
  setFileName: (fileName: string) => void;
  setFileSize: (fileSize: number) => void;
  setMimeType: (mimeType: string) => void;
  setMetadtaId: (metadataId: string) => void;
}

export const mainStore = create<MainStore>((set) => ({
  pdfLink: "",
  setPdf: (pdfLink: string) => set(() => ({ pdfLink })),
}));

export const fileStore = create<FileStore>((set) => ({
  file: "",
  fileName: "",
  fileSize: 0,
  mimeType: "",
  metadataId: "",
  setFile: (file: FormDataEntryValue) => set(() => ({ file })),
  setFileName: (fileName: string) => set(() => ({ fileName })),
  setFileSize: (fileSize: number) => set(() => ({ fileSize })),
  setMimeType: (mimeType: string) => set(() => ({ mimeType })),
  setMetadtaId: (metadataId: string) => set(() => ({ metadataId })),
}));
