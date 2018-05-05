import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { AuthService, NotificationService } from "../_services";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthService
        , private notification: NotificationService) {

    }

    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
        if (this.authService.isAdmin) {
            return true;
        } else {
            this.notification.showWarning("You are trying to access admin portal.")
            return false;
        }
    }
}