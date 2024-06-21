import axios, { Axios, AxiosResponse } from "axios";
import { transformSnakeCaseToCamelCase } from "@/utils";
import { apiBaseUrl } from "@/constants";

interface Config {
  transformToCamelCase?: boolean;
}

export interface IHttpService {
  get: Axios["get"];
  post: Axios["post"];
  put: Axios["put"];
  delete: Axios["delete"];
}
export class HttpService implements IHttpService {
  private axiosInstance;

  constructor(private readonly config?: Config) {
    this.axiosInstance = axios.create({
      // You can set base URL and other configurations here
      baseURL: apiBaseUrl,
    });
  }

  public async get<T>(...args: Parameters<Axios["get"]>): Promise<T> {
    try {
      return this.transformResponse(await this.axiosInstance.get<T>(...args));
    } catch (error) {
      // TODO: Add sentry logging
      throw error;
    }
  }

  public async post<T>(...args: Parameters<Axios["post"]>): Promise<T> {
    try {
      return this.transformResponse(await this.axiosInstance.post<T>(...args));
    } catch (error) {
      // TODO: Add sentry logging
      throw error;
    }
  }

  public async put<T>(...args: Parameters<Axios["put"]>): Promise<T> {
    try {
      return this.transformResponse(await this.axiosInstance.put<T>(...args));
    } catch (error) {
      throw error;
    }
  }

  public async delete<T>(...args: Parameters<Axios["delete"]>): Promise<T> {
    try {
      return this.transformResponse(await this.axiosInstance.delete<T>(...args));
    } catch (error) {
      // TODO: Add sentry logging
      throw error;
    }
  }

  private transformResponse<T>(response: AxiosResponse<T>): T {
    if (this.config?.transformToCamelCase) {
      return transformSnakeCaseToCamelCase(response.data);
    }
    return response.data;
  }
}
