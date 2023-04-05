import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateAppointmentComponent } from './pages/appointment/create-appointment/create-appointment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  {
    path: 'appointment/add',
    pathMatch: 'full',
    component: CreateAppointmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
