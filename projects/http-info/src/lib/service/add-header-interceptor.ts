import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class AddHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.addHeader(req))
    }


    addHeader(req: HttpRequest<any>) {
        let local = localStorage.getItem('login') || '{}';
        let data: any = JSON.parse(local);
        return req.clone({ setHeaders: { 'token': data.token, userlogin: data.userlogin } })
    }
}