import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// A little bit lazy Lazy
//import { Module1Module } from '../module1/module1.module';
//import { Module2Module } from '../module2/module2.module';

// const routes: Routes = [
//   { path: 'component1', loadChildren: () => Module1Module },
//   { path: 'component2', loadChildren: () => Module2Module },
//   { path: '**', component: PageNotFoundComponent }
// ];

// Con lazy
const routes: Routes = [
  { path: 'component1', loadChildren: './../module1/module1.module#Module1Module'},
  { path: 'component2', loadChildren: './../module2/module2.module#Module2Module'},
  { path: '**', component: PageNotFoundComponent }
];

// No Lazy
//import { Component1Component } from '../module1/component1/component1.component';
//import { Component2Component } from '../module2/component2/component2.component';


// const routes: Routes = [
//   { path: 'component1', component: Component1Component},
//   { path: 'component2', component: Component2Component},
//   { path: '**', component: PageNotFoundComponent }
// ];


@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
