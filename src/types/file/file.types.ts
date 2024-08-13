export interface FileUploadResponse {
  data: {
    uploadUrl: {
      signedUrl: any;
      metadataId: string;
      s3Key: string;
    };
    key: string;
    encryptedBuffer: string;
  };
  message: string;
}

export interface shareParams {
  fileId: string;
  expiresInHours: number;
  recipientEmails: string;
}

export interface MyFile {
  id: string;
  userId: number;
  metadataId: string;
  s3Key: string;
  s3Url: string;
  fileName: string;
  shareWith: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  fileSize: number;
  mimeType: string;
  ext: string;
}

export interface MyFileResponse {
  data: MyFile[];
}
