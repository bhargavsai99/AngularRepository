import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './ContactService';
import { contactpipe } from './contactpipe';
import { sortpipe } from './sortpipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    contactpipe,
    sortpipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
