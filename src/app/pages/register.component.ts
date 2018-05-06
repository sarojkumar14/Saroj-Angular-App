import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Register ,Serverresponse} from '../_models/index';

import { AuthService } from '../_services/index';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  public register;
  constructor(private authService:AuthService, private router: Router,
    private route: ActivatedRoute) {
    this.register=new Register();
   }

   onRegister(){
    this.authService.register(this.register).subscribe(res => {
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
