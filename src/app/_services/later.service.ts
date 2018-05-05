import { Injectable } from "@angular/core";
import { CommonConstants } from "../_helpers";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WatchLater } from "../_models";

@Injectable()

export class WatchLaterService {
    private apiUrl: string = '';
    constructor(private http: HttpClient) {
        this.apiUrl = `${CommonConstants.API_URL}api/later`;
    }

    create(watchHistory: WatchLater, token: string) {
        let url = `${this.apiUrl}/create`;
        return this.http.post(url, { data: watchHistory, token: token });
    }

    getWatchLaterByUser(userId: number, token: string) {
        let url = `${this.apiUrl}/watchLaterByUser?userId=${userId}`;
        return this.http.get(url, { headers: new HttpHeaders({ 'x-access-token': token }) });
    }

    removeWatchLater(watchId: number, token: string) {
        let url = `${this.apiUrl}/removeWatchLater?watchId=${watchId}`;
        return this.http.get(url, { headers: new HttpHeaders({ 'x-access-token': token }) });
    }
}