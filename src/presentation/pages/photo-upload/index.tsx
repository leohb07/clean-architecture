import { MouseEvent, useCallback, useState } from "react";
import { SendImage } from "../../../domain/usecases/send-image";

type PhotoUploadProps = {
  sendImage: SendImage;
};

export function PhotoUpload({ sendImage }: PhotoUploadProps) {
  const [file, setFile] = useState<string | Blob>("")
  const [fileUrl, setFileUrl] = useState("")
  const [description, setDescription] = useState("")

  const handleSendPicture = useCallback(
    async (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      await sendImage.send({
        file,
        description,
      })
    },
    [sendImage, file, description]
  );

  return (
    <h1>Welcome</h1>
  )
}

