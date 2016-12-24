/// <reference types="materialize-css" />

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Hero }              from '../models/hero';
import { HeroService }       from '../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'heroes',
  templateUrl: '../../templates/heroes.component.html',
  styleUrls: [ '../../styles/heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    Materialize.updateTextFields();
    this.comeOnOurHeroes();
  }

  public gotoDetail(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }

  public onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  public add(paramName: string): void {
    const name = paramName.trim();
    if (!name) { return; }

    this.heroService.create(name).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }

  public delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  private comeOnOurHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // this.heroService.comeOnHeroesSlowly().then(heroes => this.heroes = heroes);
    // this.heroService.comeOnOurHeroes().then(heroes => this.heroes = heroes);
  }

}
