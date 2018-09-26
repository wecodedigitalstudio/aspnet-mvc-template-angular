import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DevsComponent } from './devs/devs.component';
import { AppRoutingModule } from './app-routing.module';

import {APP_BASE_HREF} from '@angular/common';

import { Module1Module } from '../module1/module1.module';
import { Module2Module } from '../module2/module2.module';

@NgModule({
  declarations: [
    AppComponent,
    DevsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Module1Module,
    Module2Module
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
