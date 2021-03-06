/// <reference types="materialize-css" />

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService }              from '../services/hero.service';
import { Hero }                     from '../models/hero';
import '../modules/rxjs-extensions';

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: '../../templates/hero-detail.component.html',
  // styleUrls: [ '../../styles/hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) =>
      this.heroService.getHero(Number(params['id']))
    ).subscribe(hero =>
      this.hero = hero
    );
  }

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  save(): void {
    this.heroService.update(this.hero).then(() =>
      this.goBack()
    );
  }

  goBack(): void {
    this.location.back();
  }

}
