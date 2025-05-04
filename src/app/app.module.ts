import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/components/home/home.component';
import { AboutComponent } from './pages/components/about/about.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { ProfileComponent } from './pages/components/profile/profile.component';

import { ToDoComponent } from './pages/components/profile/components/to-do/to-do.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CardComponent } from './pages/components/profile/components/to-do/components/card/card.component';
import { FormComponent } from './pages/components/profile/components/to-do/components/form/form.component';
import { CaruselComponent } from './pages/components/home/components/carusel/carusel.component';
import { HomeInfoComponent } from './pages/components/home/components/home-info/home-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    CardComponent,
    FormComponent,
    ToDoComponent,
    HeaderComponent,
    FooterComponent,
    CaruselComponent,
    HomeInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
