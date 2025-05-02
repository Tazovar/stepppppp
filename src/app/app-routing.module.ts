import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/components/login/login.component';
import { RegisterComponent } from './components/auth/components/register/register.component';
import { activateGuard } from './shared/guards/activate.guard';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'auth', pathMatch:'full',redirectTo:'auth/login'},
  {path:'home',component:HomeComponent},
  {path:'contact/:id',component:ContactComponent},
  {path:'about',component:AboutComponent,canActivate:[activateGuard]},
  {path:'auth',component:AuthComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
