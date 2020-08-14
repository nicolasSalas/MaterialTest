import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { StepperComponent } from './stepper/stepper.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Stepper', component: StepperComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Table', component: TableComponent },
  { path: 'Dialog', component: DialogComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' } // redirect to `/`
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page];
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }