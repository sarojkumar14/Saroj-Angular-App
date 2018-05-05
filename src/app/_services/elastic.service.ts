import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ElasticModel } from '../_models';

@Injectable()

export class ElasticService {
    apiUrl: string = '';

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

    ping(tokenValue: any) {
        let url = `${this.apiUrl}api/elastic/ping`;
        let _options = { headers: new HttpHeaders({ 'x-access-token': tokenValue }) };
        return this.http.get(url, _options);
    }

    isIndexExist(indexName: string, token: string) {
        let url = `${this.apiUrl}api/elastic/isIndexExist`;
        return this.http.post(url, { indexName: indexName, token: token });
    }

    createIndex(indexName: string, token: string) {
        let url = `${this.apiUrl}api/elastic/createIndex`;
        return this.http.post(url, { indexName: indexName, token: token });
    }

    deleteIndex(indexName: string, token: string) {
        let url = `${this.apiUrl}api/elastic/deleteIndex`;
        return this.http.post(url, { indexName: indexName, token: token });
    }

    addDocument(value: ElasticModel, token: string) {
        let url = `${this.apiUrl}api/elastic/addDocument`;
        return this.http.post(url, { data: value, token: token });
    }

    deleteDocument(value: ElasticModel, token: string) {
        let url = `${this.apiUrl}api/elastic/deleteDocument`;
        return this.http.post(url, { data: value, token: token });
    }

    search(value: ElasticModel, token: string) {
        let url = `${this.apiUrl}api/elastic/search`;
        return this.http.post(url, { data: value, token: token });
    }
}