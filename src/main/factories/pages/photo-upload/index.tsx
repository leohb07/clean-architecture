import { RemoteSendImage } from "../../../../data/usecases/send-image/remote-send-image";
import { AxiosHttpClient } from "../../../../infra/http/axios-http-client"
import { PhotoUpload } from "../../../../presentation/pages/photo-upload";

export const PhotoUploadFactory = () => {
  const axiosHttpClient = new AxiosHttpClient();
  const remoteSendImage = new RemoteSendImage("", axiosHttpClient);

  return <PhotoUpload sendImage={remoteSendImage} />
}