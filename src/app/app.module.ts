//Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';

import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//my components
import { HeaderComponent } from './header/header.component';
import { CourseCreateComponent } from './Courses/course-create/course-create.component';
import { CourseListComponent } from './Courses/course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseCreateComponent,
    CourseListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
