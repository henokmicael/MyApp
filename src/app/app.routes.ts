import { RouterModule, Routes, CanActivate, CanDeactivate } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentComponent } from "./student.component";
import {ProfileComponent} from "./profile.component";
import { MyActivatedGuard } from './service/guardActive.service';
import { MyDectivatedGuard } from './service/guardDeactive.service';
import {ErrorComponent} from './error.component';

const ROUTERS = [
    {path: 'home', component: HomeComponent},
    {path: 'student', component: StudentComponent, children: [{path: 'profile', component: ProfileComponent, canActivate: [MyActivatedGuard]}]},
    {path: 'profile', component: ProfileComponent, canActivate: [MyActivatedGuard] }, 
    {path: 'error', component: ErrorComponent},
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(ROUTERS);