import { useMutation } from "react-query";
import mainRepositoryImpl from "src/repositories/file/mainRepositoryImpl";
import { shareParams } from "src/types/file/file.types";

export const useUploadFiles = () => {
  const mutation = useMutation((uploadParams: FormData) => mainRepositoryImpl.upload(uploadParams));
  return mutation;
};

export const useFileShare = () => {
  const mutation = useMutation((shareParams: shareParams) => mainRepositoryImpl.fileShare(shareParams));
  return mutation;
};
