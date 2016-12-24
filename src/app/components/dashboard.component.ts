import { Component, OnInit } from '@angular/core';
import { Hero }              from '../models/hero';
import { HeroService }       from '../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: '../../templates/dashboard.component.html',
  styleUrls: [ '../../styles/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.comeOnOurHeroes().then(heroes =>
      this.heroes = heroes.slice(0, 5)
    );
  }
}
