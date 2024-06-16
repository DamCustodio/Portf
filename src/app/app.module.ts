import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { VariosComponent } from './app/varios/varios.component';
import { InfComponent } from './inf/inf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreeComponent,
    HomeComponent,
    ContactComponent,
    VariosComponent,
    InfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
