import { HttpMethod, HttpOptions, HttpParams } from './../http/types/http.type';

/* export function HttpParamsOptions(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = async function (url: string, params?: HttpParams, options?: HttpOptions) {

    const _url = new URL(url, this.urlBase);

    if (params) {
      Object.keys(params).forEach(key => {
        _url.searchParams.append(key, params[key]);
      });
    }

    const defaultOptions: HttpOptions = {
      method: HttpMethod.GET,
      headers: {
        ...this?.headers,
      }
    };
    
    const mergedOptions = options ? { ...defaultOptions, ...options } : defaultOptions;

    return await originalMethod.call(this, _url.toString(), mergedOptions);
  }
  return descriptor;
} */


export function HttpParamsOptions(method: HttpMethod): MethodDecorator {
  return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (url: string, params?: HttpParams, options?: HttpOptions) {

      const _url = new URL(url, this.urlBase);
  
      if (params) {
        Object.keys(params).forEach(key => {
          _url.searchParams.append(key, params[key]);
        });
      }

      let payload = {}

      if(method !== HttpMethod.GET && method !== HttpMethod.DELETE) {
        payload = { body: JSON.stringify(params) };
      }
  
      const defaultOptions: HttpOptions = {
        method,
        headers: {
          ...payload,
          ...this?.headers,
        }
      };
      
      const mergedOptions = options ? { ...defaultOptions, ...options } : defaultOptions;
  
      return await originalMethod.call(this, _url.toString(), mergedOptions);
    }

    return descriptor;
  };
}


