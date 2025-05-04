import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { AboutComponent } from './pages/components/about/about.component';
import { ProfileComponent } from './pages/components/profile/profile.component';
import { ToDoComponent } from './pages/components/profile/components/to-do/to-do.component';
import { activeRouteGuard } from './shared/guards/active-route.guard';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent,canActivate:[activeRouteGuard]},
  {path:'profile',component:ProfileComponent,children:[
    {path:'to-do',component:ToDoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
