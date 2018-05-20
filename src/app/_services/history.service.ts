import { Injectable } from "@angular/core";
import { CommonConstants } from "../_helpers/index";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { History } from "../_models";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class HistoryService {

    private apiUrl: string = '';
    constructor(private http: HttpClient) {
        this.apiUrl = `${CommonConstants.API_URL}api/history`;
    }

    createHistory(watchHistory: History, token: string) {
        let url = `${this.apiUrl}/create`;
        return this.http.post(url, { data: watchHistory, token: token });
    }

    getWatchedHistoryByUser(userId: number, token: string) {
        let url = `${this.apiUrl}/watchedHistoryByUser?userId=${userId}`;
        return this.http.get(url, { headers: new HttpHeaders({ 'x-access-token': token }) });
    }

    removeHistory(watchId: number, token: string) {
        let url = `${this.apiUrl}/removeHistory?watchId=${watchId}`;
        return this.http.get(url, { headers: new HttpHeaders({ 'x-access-token': token }) });
    }
}