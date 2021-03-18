import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DialogRecordaComponent } from './home/components/dialog-recorda/dialog-recorda.component';


@NgModule({
  declarations: [
       HomeComponent,
       DialogRecordaComponent,
    ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    DialogRecordaComponent
  ]
})
export class PagesModule { }
