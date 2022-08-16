import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { storage } from "../utils/fire";

const STATE_CHANGE_NAME = "state_changed";

const getFileUploadPercentage = (filesize, uploadedSize) => {
  return Math.ceil((uploadedSize * 100) / filesize);
};

const initialState = {
  url: "",
  loading: false,
  error: "",
  isVideo: false,
  percentage: 0,
};

export const useUploadImage = () => {
  const [state, setState] = useState(initialState);

  const handleError = (imageError) =>
    setState((prev) => ({ ...prev, error: imageError, loading: false }));

  const getImageName = (file) => {
    if (file) {
      const size = file.size;
      const [olderFileName, extension] = file?.name?.split(".") ?? [];
      const isVideo = ["3gp", "mp4", "mkv", "webm", "flv"].includes(
        extension.toLowerCase()
      );
      const newFileName = `${olderFileName}${uuidv4()}.${extension}`;
      return [newFileName, isVideo, size];
    }
    return [];
  };

  const handleUpload = async ({ file }) => {
    const [fileName, isVideo, size] = getImageName(file);
    const upload = storage.ref(`files/${fileName}`).put(file);

    setState((prev) => ({ ...prev, loading: true, isVideo }));

    //uploading...

    upload.on(
      STATE_CHANGE_NAME,
      (snapshot) => {
        const percentage = getFileUploadPercentage(
          size,
          snapshot.bytesTransferred
        );
        setState((prev) => ({ ...prev, percentage }));
      },
      handleError,
      () => {
        storage
          .ref("files")
          .child(fileName)
          .getDownloadURL()
          .then((imageURL) => {
            setState((prev) => ({ ...prev, url: imageURL, loading: false }));
          });
      }
    );
  };

  const handleReset = () => setState(initialState);

  return { ...state, handleUpload, handleReset };
};