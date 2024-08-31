import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
  {
    path: "", pathMatch: 'full', component: DashboardComponent
  },
  {
    path: "register", component: RegisterComponent
  }
];
