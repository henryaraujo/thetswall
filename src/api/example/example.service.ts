import { Http } from '../../core/http/http';
import { MainService } from '../../core/services/main.service';
import { ExampleInterface } from './example.interface';

export class ExampleService extends MainService<ExampleInterface> {
  
  protected url: string = 'https://jsonplaceholder.typicode.com';
  constructor() {
    super(new Http());
  }
  
  get uri(): string {
    return '/users'
  }

  async getExample(): Promise<ExampleInterface> {
    return this.http.get(`${this.url}${this.uri}`, {userId: 1})
  }
}