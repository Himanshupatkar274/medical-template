import { Routes } from '@angular/router';
import { HospitalDashboardComponent } from './components/hospital-dashboard/hospital-dashboard.component';
import { MedicalDashboardComponent } from './components/medical-dashboard/medical-dashboard.component';

export const routes: Routes = [
    {path:'', component:HospitalDashboardComponent},
    {path:'medical-dashboard', component:MedicalDashboardComponent},
];
