import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HEROES } from './mock-heroes';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = HEROES;
    return {heroes};
  }
}
