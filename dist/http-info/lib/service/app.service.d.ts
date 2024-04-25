import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class AppService {
    http: HttpClient;
    constructor(http: HttpClient);
    getListUrl: string;
    getListHttp(body: any): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppService>;
}
