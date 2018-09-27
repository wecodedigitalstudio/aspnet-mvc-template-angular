import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2.routing';
import { Component2Component } from './component2/component2.component';

@NgModule({
  imports: [
    CommonModule,
    Module2RoutingModule
  ],
  declarations: [Component2Component],
  entryComponents: [Component2Component]
})
export class Module2Module { }
