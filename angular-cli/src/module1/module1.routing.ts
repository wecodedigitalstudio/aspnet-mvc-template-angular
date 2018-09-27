import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Component1Component } from './component1/component1.component';
import { SubComponent1Component } from './component1/subComponent1.component';
import { SubComponent2Component } from './component1/subComponent2.component';


const routes: Routes = [
    {
        path: '',
        component: Component1Component,
        children: [
            {
                path: 'subComponent1',
                component: SubComponent1Component
            },
            {
                path: 'subComponent2',
                component: SubComponent2Component
            }
        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class Module1RoutingModule { }
