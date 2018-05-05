import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Library } from '../_models/index';
@Injectable()
export class LibraryService {
  apiUrl: string = '';
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  createLibrary(libary: Library) {
    let url = `${this.apiUrl}api/library/create`;
    return this.http.post(url, libary);
  }

  deleteLibrary(id: number, token: string) {
    let url = `${this.apiUrl}api/library/deleteLibrary`;
    return this.http.post(url, { Id: id, token: token });
  }

  getAllLibrary(tokenValue: any) {
    let url = `${this.apiUrl}api/library/getAllLibrary`;
    let _options = { headers: new HttpHeaders({ 'x-access-token': tokenValue }) };
    return this.http.get(url, _options);
  }
}
