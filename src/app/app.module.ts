import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { FacultynameComponent } from './facultyname/facultyname.component';
import { DepartnameComponent } from './departname/departname.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    FacultynameComponent,
    DepartnameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
