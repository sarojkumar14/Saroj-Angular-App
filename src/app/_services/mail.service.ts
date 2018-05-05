import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonConstants } from "../_helpers/index";
import { Mail } from "../_models";
@Injectable()
export class MailService {
    private api_url: string = "";
    constructor(private http: HttpClient) {
        this.api_url = CommonConstants.API_URL;
    }

    sendMail(mailOptins: Mail, token) {
        let url = `${this.api_url}api/mail/sendmail`;
        return this.http.post(url, { data: mailOptins, token: token });
    }
}