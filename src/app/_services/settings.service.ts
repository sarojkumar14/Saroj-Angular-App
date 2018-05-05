import { Injectable } from "@angular/core";
import { CommonConstants } from "../_helpers/index";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

export class SettingsService {

    private apiUrl: string = '';
    constructor(private http: HttpClient) {
        this.apiUrl = `${CommonConstants.API_URL}api/settings`;
    }

    getConfigSettings(token) {
        let url = `${this.apiUrl}/getConfigSettings`;
        return this.http.get(url, { headers: new HttpHeaders({ 'x-access-token': token }) });
    }

    upsert(data, token) {
        let url = `${this.apiUrl}/upsert`;
        return this.http.post(url, { data: data, token: token });
    }
}