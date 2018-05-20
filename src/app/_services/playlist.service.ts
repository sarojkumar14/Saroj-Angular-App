import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  BehaviorSubject } from 'rxjs';

import { environment } from '../../environments/environment';
import { PlaylistModel } from '../_models/index';

@Injectable()
export class PlaylistService {
    private apiUrl: string = '';
    private apiData = new BehaviorSubject<any>(null);
    public apiData$ = this.apiData.asObservable();

    private apiCreateData = new BehaviorSubject<any>(null);
    public apiCreateData$ = this.apiCreateData.asObservable();


    private searchPlaylist = new BehaviorSubject<any>(null);
    public searchPlaylist$ = this.searchPlaylist.asObservable();

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl + 'api/playlist/';
    }

    createPlaylist(data: PlaylistModel) {
        return this.http.post(this.apiUrl + "createplaylist", data);
    }

    playlistCountByUser(data: any) {
        return this.http.post(this.apiUrl + "playlistcountbyuser", data);
    }

    setPlaylistCounter(data) {
        this.apiData.next(data)
    }

    createPlaylistApi(data) {
        this.apiCreateData.next(data)
    }

    filterPlaylist(data) {
        this.searchPlaylist.next(data)
    }

    getPlaylistByUser(data: any) {
        return this.http.post(this.apiUrl + "getplaylistbyuser", data);
    }

    addVideoToPlaylist(data) {
        return this.http.post(this.apiUrl + "addvideotoplaylist", data);
    }

    removePlaylist(playlistId: Number, token: any) {
        return this.http.post(this.apiUrl + "/removeplaylist", { PlaylistId: playlistId, token: token });
    }

    updatePlaylist(data: any) {
        return this.http.patch(this.apiUrl + "updateplaylist", data);
    }

    getPlaylistVideo(playlistId: Number, token: any) {
        return this.http.post(this.apiUrl + "/getplaylistvideo", { PlaylistId: playlistId, token: token });
    }

    removeVideoFromPlaylist(playlistVideoId: Number, token: any) {
        return this.http.post(this.apiUrl + "/removevideofromplaylist", { PlaylistVideoId: playlistVideoId, token: token });
    }

}