import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero }          from '../models/hero';
import { HEROES }        from './mock-heroes';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {  }

  public getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  public getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  public comeOnOurHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  public comeOnHeroesSlowly(): Promise<Hero[]> {
    // delay some seconds
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 100)
    ).then(() => this.comeOnOurHeroes());
  }

  public comeOnHero(id: number): Promise<Hero> {
    return this.comeOnOurHeroes().then(heroes =>
      heroes.find(hero => hero.id === id)
    );
  }

  public update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  public create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  public delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
