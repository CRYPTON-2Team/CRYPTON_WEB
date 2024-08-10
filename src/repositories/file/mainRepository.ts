import { FileUploadResponse } from "src/types/file/file.types";

export interface MainRepository {
  upload(file: FormData): Promise<FileUploadResponse>;
}
