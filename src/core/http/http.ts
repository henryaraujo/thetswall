import { HttpParamsOptions } from '../../core/decorators/http-params.decorator';
import { HttpParams, HttpOptions, HttpInterface, HeaderType } from './types/http.type';

export class Http implements HttpInterface {

  private readonly urlBase!: string;
  private readonly headers?: HeaderType;

  constructor(
    private readonly options?: {
      urlBase: string,
      headers?: HeaderType
    }
  ) {
    this.urlBase = options?.urlBase ?? '';
    this.headers = options?.headers;
  }

  @HttpParamsOptions
  async get<T>(url: string, params?: HttpParams, options?: HttpOptions): Promise<T> {

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error http-status: ${response.status}`);
    }

    const data = await response.json() as T;

    return data;
  }
}

