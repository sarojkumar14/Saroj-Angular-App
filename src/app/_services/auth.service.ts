import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../environments/environment';
import { User } from '../_models/index';

@Injectable()
export class AuthService {

  public loggedIn = new BehaviorSubject<boolean>(false);
  apiUrl: string = '';
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private router: Router
    , private http: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
  }

  currentUserId() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.Data.UserId;
  }

  get isAdmin() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser.Data.SMSRole.RoleName.toLowerCase() == 'admin') {
      return true;
    } else {
      return false;
    }
  }

  get isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  login(user: any) {
    if (user.username !== '' && user.password !== '') {
      let url = this.apiUrl + `api/auth`;
      return this.http.post(url, { username: user.username, password: user.password });
    }
  }

  getAuthUserDetail() {
    return localStorage.getItem('currentUser');
  }

  getCurrentUserAccessToken() {
    let user = JSON.parse(this.getAuthUserDetail());
    if (this.jwtHelper.isTokenExpired(user.token)) {
      this.loggedIn.next(false);
      localStorage.removeItem('currentUser');
      return this.router.navigate(['/'], { queryParams: { isExired: true } });
    } else {
      return user.token;
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

  register(user: any) {
    let url = this.apiUrl + `api/auth/register`;
    return this.http.post(url, user);
  }

  getAllSMSSecurityQuestion() {
    let url = this.apiUrl + `api/smsSecurityQuestion/getAllSMSSecurityQuestion`;
    return this.http.get(url);
  }
}
