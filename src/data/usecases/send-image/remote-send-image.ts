import { DetectedImage } from "../../../domain/models/detected-image";
import { SendImage } from "../../../domain/usecases/send-image";
import { HttpClient, HttpStatusCode } from "../../protocols/http/http-post-client";

export class RemoteSendImage implements SendImage {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpClient
  ) {}

  async send({ file, description }: SendImage.Params): Promise<DetectedImage> {
    const formData = new FormData()
    formData.append("file", file);
    formData.append("description", description);

    const httpResponse = await this.httpPostClient.request({
      method: "POST",
      url: this.url,
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });

    switch(httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new Error("File invalid")
      default: throw new Error("Unexpected error")
    }
  }
}