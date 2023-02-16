import { HttpParams, HttpOptions, HttpInterface, HttpMethod } from './types/http.type';

export class Http implements HttpInterface {

  constructor() {}
  async get<T>(url: string, query?: HttpParams, options?: HttpOptions): Promise<T> {
    const params = new URL(url);
    if (query) {
      Object.keys(query).forEach(key => {
        params.searchParams.append(key, query[key]);
      });
    }
    return await this.request<T>(HttpMethod.GET, params.toString(), options);
  }

  async post<T>(url: string, payload: object, options?: HttpOptions): Promise<T> {
    return await this.request<T>(HttpMethod.POST, url, {...options, body: JSON.stringify(payload)})
  }

  async request<T>(method: HttpMethod, url: string, options?: HttpOptions): Promise<T> {
    const request = new Request(url, {
      method,
      ...options
    })

    const response = await fetch(request);
    return response.json() as T;
  }
}

