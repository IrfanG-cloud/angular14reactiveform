import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    ModalpopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
