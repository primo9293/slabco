import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecordatorioComponent } from './home/components/recordatorio/recordatorio.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        /* children: [
          { path: '', component: HomeComponent},            
          { path: 'recordatorio/:id', component: RecordatorioComponent},
        ] */
    },
    {
      path: 'recordatorio/:id',
      component: RecordatorioComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
