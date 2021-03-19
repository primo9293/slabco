import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DialogRecordaComponent } from './home/components/dialog-recorda/dialog-recorda.component';
import { RecordatorioComponent } from './home/components/recordatorio/recordatorio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
       HomeComponent,
       DialogRecordaComponent,
       RecordatorioComponent,
    ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    DialogRecordaComponent,
    RecordatorioComponent
  ]
})
export class PagesModule { }
