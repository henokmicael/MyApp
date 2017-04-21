import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';

export interface ComponentCanDeactivate{
    CanDeactivate: () => boolean | Observable<boolean>;
}

export class MyDectivatedGuard implements CanDeactivate<ComponentCanDeactivate> {
    canDeactivate(component: ComponentCanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return component.CanDeactivate ? component.CanDeactivate() : true;
    }

}