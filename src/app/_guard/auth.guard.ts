import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from '../_services/index';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn
      .take(1)
      .map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      });
  }
}
