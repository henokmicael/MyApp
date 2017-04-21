import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {myRoutes} from './app.routes';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import {HomeComponent} from './home.component';
import { DbService } from './service/db.service';
import { ProfileComponent } from './profile.component';
import { MyActivatedGuard } from './service/guardActive.service';
import { MyDectivatedGuard } from './service/guardDeactive.service';
import {ErrorComponent} from './error.component';

@NgModule({
  declarations: [
    AppComponent,   
    HomeComponent,
    StudentComponent,
    ProfileComponent,
    ErrorComponent  
        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [DbService, MyDectivatedGuard, MyActivatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
