import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NotificationService } from '../../_services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private notification: NotificationService) {
  }

  ngOnInit() {
  }
  onSubmit(valid, value) {
    if (valid) {
      this.notification.showInfo("Mail with verification code will sent to your registerd mail id.", "Forgot Password")
    }
  }
}
