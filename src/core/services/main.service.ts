import { URL_BASE } from '../../config/constants';
import { HttpInterface, HttpParams, HttpOptions } from '../http/types/http.type';

export abstract class MainService<T> {

  protected url: string = URL_BASE;
  
  constructor(protected readonly http: HttpInterface){}
  
  abstract get uri(): string;

  async find(params?: HttpParams, options?: HttpOptions): Promise<T> {
    return this.http.get(`${this.uri}`, params, options);
  }

  async findAll(): Promise<T> {
    return this.http.get(`${this.uri}`);
  }

  async create(payload: any): Promise<T> {
    return this.http.post(`${this.uri}`, payload)
  }
}