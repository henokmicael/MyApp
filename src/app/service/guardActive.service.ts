import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DbService } from '../service/db.service';

@Injectable()
export class MyActivatedGuard implements CanActivate {

    id: number;
    student:object;
    constructor(private router: Router, private dbService: DbService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
       this.student = this.dbService.getStudent(route.queryParams['id']);    
        
        if (this.student != null) {
            return true;
        }
        this.router.navigate(['error']);
        return false;
    }


}