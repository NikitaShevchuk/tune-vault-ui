import axios, { Axios, AxiosResponse } from "axios";
import { transformSnakeCaseToCamelCase } from "src/utils";
import { apiBaseUrl } from "src/constants";
import { getCookie } from "./cookie";

interface Config {
  transformToCamelCase?: boolean;
  withAuthorization?: boolean;
}

export class HttpService {
  private axiosInstance;

  constructor(private readonly config?: Config) {
    this.axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      headers: {
        ...(config?.withAuthorization !== false
          ? { Authorization: `Bearer ${getCookie("token")}` }
          : {}),
      },
    });
  }

  public async get<T>(
    ...args: Parameters<Axios["get"]>
  ): Promise<AxiosResponse<T>> {
    try {
      return this.transformResponse(await this.axiosInstance.get<T>(...args));
    } catch (error) {
      // TODO: Add sentry logging
      throw error;
    }
  }

  public async post<T>(
    ...args: Parameters<Axios["post"]>
  ): Promise<AxiosResponse<T>> {
    try {
      return this.transformResponse(await this.axiosInstance.post<T>(...args));
    } catch (error) {
      // TODO: Add sentry logging
      throw error;
    }
  }

  public async put<T>(
    ...args: Parameters<Axios["put"]>
  ): Promise<AxiosResponse<T>> {
    try {
      return this.transformResponse(await this.axiosInstance.put<T>(...args));
    } catch (error) {
      throw error;
    }
  }

  public async delete<T>(
    ...args: Parameters<Axios["delete"]>
  ): Promise<AxiosResponse<T>> {
    try {
      return this.transformResponse(
        await this.axiosInstance.delete<T>(...args),
      );
    } catch (error) {
      // TODO: Add sentry logging
      throw error;
    }
  }

  private transformResponse<T>(response: AxiosResponse<T>) {
    if (this.config?.transformToCamelCase) {
      return {
        ...response,
        data: transformSnakeCaseToCamelCase(response.data),
      };
    }
    return response;
  }
}
