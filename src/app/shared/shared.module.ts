import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
  // AppNavbarComponent,
],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    // AppNavbarComponent,
    MaterialModule
  ]
})
export class SharedModule { }