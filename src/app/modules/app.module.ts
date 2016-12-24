import { NgModule }            from '@angular/core';
import { HttpModule }          from '@angular/http';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../services/in-memory-data.service';

import { AppComponent }         from '../components/app.component';
import { HeroesComponent }      from '../components/heroes.component';
import { HeroDetailComponent }  from '../components/hero-detail.component';
import { DashboardComponent }   from '../components/dashboard.component';
import { HeroSearchComponent }  from '../components/hero-search.component';
import { HeroService }          from '../services/hero.service';
import { AppRoutingModule }     from './app-routing.module';
import { MaterializeDirective } from 'angular2-materialize';
import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    MaterializeDirective
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule { }
