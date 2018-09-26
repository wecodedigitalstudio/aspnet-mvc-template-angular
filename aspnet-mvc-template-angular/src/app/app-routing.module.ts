import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Con lazy
// const routes: Routes = [
//   { path: 'Devs', loadChildren: './../module1/module1.module#Module1Module'},
//   { path: 'component2', loadChildren: './../module2/module2.module#Module2Module'}
// ];

// No Lazy
import { Component1Component } from '../module1/component1/component1.component';
import { Component2Component } from '../module2/component2/component2.component';

const routes: Routes = [
  { path: 'Devs', component: Component1Component},
  { path: 'component2', component: Component2Component}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}