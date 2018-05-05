import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Video, Transcript } from '../_models/index';
import { Router } from '@angular/router';

@Injectable()
export class FileService {
  public tempData: any;
  apiUrl: string = '';
  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.apiUrl;
  }

  UploadVideo(video: Video, transcript: Transcript, resources: any, token: string) {
    let url = `${this.apiUrl}api/file/UploadVideo`;
    return this.http.post(url, { video: video, transcript: transcript, resources: resources, token: token });
  }

  getUserCollections(token: string) {
    let url = this.apiUrl + `api/collection/getUserCollections`;
    return this.http.get(url, { headers: new HttpHeaders({ 'x-access-token': token }) });
  }

  updateViewCount(videoId: number, token: string) {
    let url = `${this.apiUrl}api/file/updateViewCount?videoId=${videoId}`;
    return this.http.get(url, { headers: new HttpHeaders({ 'x-access-token': token }) });
  }

  getVideoById(guid: string, token: string) {
    let url = `${this.apiUrl}api/file/getVideoById?guid=${guid}`;
    return this.http.get(url, { headers: new HttpHeaders({ 'x-access-token': token }) });
  }

  UpdateVideoMetadata(video: Video, token: string) {
    let url = `${this.apiUrl}api/file/UpdateVideoMetadata`;
    return this.http.put(url, { video: video, token: token });
  }

  UpdateVideoFile(oldVideo: Video, newVideo: Video, token: string) {
    let url = `${this.apiUrl}api/file/UpdateVideoFile`;
    return this.http.put(url, { oldVideo: oldVideo, newVideo: newVideo, token: token });
  }

  UpdateTranscriptFile(oldTranscript: Transcript, newTranscript: Transcript, token: string) {
    let url = `${this.apiUrl}api/file/UpdateTranscriptFile`;
    return this.http.put(url, { oldTranscript: oldTranscript, newTranscript: newTranscript, token: token });
  }

  DeleteResourceFile(videoId: number, resource: any, token: string) {
    let url = `${this.apiUrl}api/file/DeleteResourceFile`;
    return this.http.put(url, { videoId: videoId, resource: resource, token: token });
  }

  CreateResourceFileForVideo(videoId: number, resource: any, token: string) {
    let url = `${this.apiUrl}api/file/CreateResourceFileForVideo`;
    return this.http.post(url, { videoId: videoId, resource: resource, token: token });
  }

}
