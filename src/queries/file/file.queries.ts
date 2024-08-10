import { useMutation } from "react-query";
import mainRepositoryImpl from "src/repositories/file/mainRepositoryImpl";

export const useUploadFiles = () => {
  const mutation = useMutation((uploadParams: FormData) => mainRepositoryImpl.upload(uploadParams));
  return mutation;
};
