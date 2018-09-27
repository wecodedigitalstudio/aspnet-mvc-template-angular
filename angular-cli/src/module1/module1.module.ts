import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1.routing';
import { Component1Component } from './component1/component1.component';
import { SubComponent1Component } from './component1/subComponent1.component';
import { SubComponent2Component } from './component1/subComponent2.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [Component1Component, SubComponent1Component, SubComponent2Component],
  entryComponents: [Component1Component]
})
export class Module1Module { }
