import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../../environments/environment';
import { CollectionModel } from '../_models/index';

@Injectable()
export class CollectionService {
  private apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();
  private apiUrl: string = '';
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl + 'api/collection/';
  }

  createCollection(data: CollectionModel): Observable<CollectionModel> {
    return this.http.post<CollectionModel>(this.apiUrl + "createcollection", data);
  }

  getcollectionbyuserrole(token: any, UserId: Number, RoleId: Number): Observable<CollectionModel[]> {
    let url = `${this.apiUrl}/getcollectionbyuserrole/${RoleId}/${UserId}`;
    let _options = { headers: new HttpHeaders({ 'x-access-token': token }) };
    return this.http.get<CollectionModel[]>(url, _options);
  }

  removeCollection(collectionId: Number, token: any) {
    return this.http.put(this.apiUrl + "/removecollection", { CollectionId: collectionId, token: token })
  }

  updateCollection(data: CollectionModel): Observable<CollectionModel> {
    return this.http.patch<CollectionModel>(this.apiUrl + "updatecollection", data);
  }

  getUserCollectionVideos(token: any, UserId: Number, RoleId: Number, CollectionId: Number): Observable<any[]> {
    let url = `${this.apiUrl}/getusercollectionvideos/${RoleId}/${UserId}/${CollectionId}`;
    let _options = { headers: new HttpHeaders({ 'x-access-token': token }) };
    return this.http.get<any[]>(url, _options);
  }

  readVideoTranscript(token: any, UserId: Number, language: String) {
    return this.http.post(this.apiUrl + "readvideotranscript", { token: token, UserId: UserId, language: language });
  }

  getAllVideos(token: any, RoleId: Number) {
    let url = `${this.apiUrl}/getallvideos/${RoleId}`;
    let _options = { headers: new HttpHeaders({ 'x-access-token': token }) };
    return this.http.get(url, _options);
  }

  adminSelectVideoToCollection(data: any) {
    return this.http.post(this.apiUrl + "adminselectvideotocollection", data);
  }

  getAllUsers(token: any, RoleId: Number) {
    let url = `${this.apiUrl}/getallusers/${RoleId}`;
    let _options = { headers: new HttpHeaders({ 'x-access-token': token }) };
    return this.http.get(url, _options);
  }

  adminLinkCollectionToUser(data: any) {
    return this.http.post(this.apiUrl + "adminlinkcollectiontouser", data);
  }

  callCollectionBehaviourSubject(data) {
    this.apiData.next(data)
  }

  getCollectionCount(data: any) {
    return this.http.post(this.apiUrl + "getcollectioncount", data);
  }
}
