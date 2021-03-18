import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';

import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
       HomeComponent,
    ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class PagesModule { }
