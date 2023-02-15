export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export type HeaderType = {
  [key: string]: string
}

export type HttpParams = Record<string, any>;
export type HttpOptions = {
  method?: keyof typeof HttpMethod,
  headers: HeaderType,
};

export interface HttpInterface {
  get<T>(url: string, params?: HttpParams, options?: HttpOptions): Promise<T>;
}