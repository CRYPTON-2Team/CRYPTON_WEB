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
  token: string;
}
