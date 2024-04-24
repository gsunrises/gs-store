import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(public http: HttpClient) {

    }

    getListUrl = "get/list";
    getListHttp(body: any): Observable<any> {
        return this.http.post(this.getListUrl, body)
    }
}