import { Injectable } from "@angular/core";
import { CommonConstants } from "../_helpers/index";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Comment } from '../_models';

@Injectable()

export class CommentService {
    private apiUrl: string = '';
    constructor(private http: HttpClient) {
        this.apiUrl = `${CommonConstants.API_URL}api/comment`;
    }

    createComment(value: Comment, token) {
        let url = `${this.apiUrl}/createComment`;
        return this.http.post(url, { data: value, token: token });
    }

    getVideoComments(videoId, token) {
        let url = `${this.apiUrl}/getVideoComments`;
        return this.http.post(url, { data: videoId, token: token });
    }

    deleteComment(commentId: any, token) {
        let url = `${this.apiUrl}/deleteComment`;
        return this.http.post(url, { data: commentId, token: token });
    }
}