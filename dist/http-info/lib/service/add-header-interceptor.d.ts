import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class AddHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    addHeader(req: HttpRequest<any>): HttpRequest<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddHeaderInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AddHeaderInterceptor>;
}
