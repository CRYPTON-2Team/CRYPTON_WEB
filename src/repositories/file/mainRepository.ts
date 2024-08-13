import { FileUploadResponse, shareParams } from "src/types/file/file.types";

export interface MainRepository {
  upload(file: FormData): Promise<FileUploadResponse>;
  fileShare(shareParams: shareParams): Promise<void>;
}
