import { Component, OnInit } from '@angular/core';
import { AuthService, NotificationService } from '../../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute, private notification: NotificationService) {

    this.route.queryParams
      .subscribe(params => {
        if (params.isExired !== undefined) {
          if (params.isExired)
            this.notification.showInfo("Token in expired, Please login and continue.")
        }
      });

    let value = JSON.parse(this.authService.getAuthUserDetail())
    if (value) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {

  }

  onSubmit(valid: boolean, value: any) {
    if (valid) {
      this.authService.login(value)
        .subscribe(data => {
          localStorage.setItem('currentUser', JSON.stringify(data));

          this.authService.loggedIn.next(true);
          this.router.navigate(['home']);
        },
          err => {
            this.notification.showError(err.error.Message, "Login Alert!")
          });
    }
  }
}
