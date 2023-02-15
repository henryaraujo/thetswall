import { Http } from '../http/http';
import { URL_BASE, TOKEN } from '../../config/constants';
import { HttpInterface, HttpParams, HttpOptions } from '../http/types/http.type';

export abstract class MainService<T> {

  protected readonly http: HttpInterface;

  constructor(){
    this.http = new Http({urlBase: URL_BASE, headers: {
      'Accept': 'application/json',
      'X-Api-Key': TOKEN
    }})
  }
  
  abstract get uri(): string;

  async find(params?: HttpParams, options?: HttpOptions): Promise<T> {
    return this.http.get(`${this.uri}`, params, options);
  }

  async findAll(): Promise<T> {
    return this.http.get(`${this.uri}`);
  }
}