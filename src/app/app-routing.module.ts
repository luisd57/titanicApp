import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';


const routes: Routes = [
  { path: "", component: RegisterComponent },
  {
    path: "", component: LayoutComponent,
    canActivate: [AngularFireAuthGuard],
    children: [
      { path: "passengers", component: PassengersComponent },
    ]
  },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
