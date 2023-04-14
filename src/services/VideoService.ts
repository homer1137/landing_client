import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import $api from "../http";
import { GetVideoResponse } from "../models/response/VideoResponse";

export class VideoService {
  static async getVideos(): Promise<AxiosResponse<GetVideoResponse[]>> {
    return $api.get<GetVideoResponse[]>("/videos");
  }
}
