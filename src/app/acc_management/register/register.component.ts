import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
import { Serverresponse } from '../../_models/serverresponse';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userObj = {
    userName: null,
    firstName: null,
    middleName: null,
    lastName: null,
    emailId: null,
    password: null,
    confirmPassword: null,
    roleId: null,
    securityQuestionId: null,
    securityAnswer: null,
    createdOn: null,
    createdBy: null,
    updatedOn: null,
    updatedBy: null
  }
  securityQuestions = [];

  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute) {
    let value = JSON.parse(this.authService.getAuthUserDetail())
    if (value) {
      this.router.navigate(['resource']);
    }
  }

  ngOnInit() {
    this.getAllSMSSecurityQuestion();
  }

  getAllSMSSecurityQuestion(): void {
    this.authService.getAllSMSSecurityQuestion()
      .subscribe(res => {
        var value = res as Serverresponse;
        if (value.IsSuccess) {
          this.securityQuestions = value.Data;
        }
      });
  }

  onSubmit(registerForm) {
    if (registerForm.valid) {
      this.userObj.roleId = 3;
      this.userObj.createdOn = new Date(Date.now()).toISOString();
      this.userObj.createdBy = 1;
      this.userObj.updatedOn = new Date(Date.now()).toISOString();
      this.userObj.updatedBy = 1;
      this.authService.register(this.userObj).subscribe(res => {
        var value = res as Serverresponse;
        if (value.IsSuccess) {
          alert('You have registered successfully.Please try to login.');
          this.router.navigate(['']);
        }
        else {
          alert(value.Message);
        }
      });
    }
  }

}
