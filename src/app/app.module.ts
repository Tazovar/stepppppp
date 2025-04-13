import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/main/children/form/form.component';
import { CardsComponent } from './components/main/children/cards/cards.component';
import { CardComponent } from './components/main/children/cards/children/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    CardsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
