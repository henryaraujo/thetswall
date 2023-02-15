import { MainService } from '../../core/services/main.service';
import { ExampleInterface } from './example.interface';

export class ExampleService extends MainService<ExampleInterface> {
  
  constructor() {
    super();
  }
  
  get uri(): string {
    return 'examples'
  }

  async getExample(limit: number = 1): Promise<ExampleInterface> {
    return this.http.get(`${this.uri}`,{ limit })
  }
}