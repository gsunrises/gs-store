import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

class HttpInfoService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpInfoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpInfoService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpInfoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AppService {
    constructor(http) {
        this.http = http;
        this.getListUrl = "get/list";
    }
    getListHttp(body) {
        return this.http.post(this.getListUrl, body);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class HttpInfoComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
        console.log('123');
        this.appService.getListHttp({ aa: '11' });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpInfoComponent, deps: [{ token: AppService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: HttpInfoComponent, selector: "lib-http-info", ngImport: i0, template: `
    <p>
      http-info works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpInfoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-http-info', template: `
    <p>
      http-info works!
    </p>
  ` }]
        }], ctorParameters: function () { return [{ type: AppService }]; } });

class AddHeaderInterceptor {
    intercept(req, next) {
        return next.handle(this.addHeader(req));
    }
    addHeader(req) {
        let local = localStorage.getItem('login') || '{}';
        let data = JSON.parse(local);
        return req.clone({ setHeaders: { 'token': data.token, userlogin: data.userlogin } });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AddHeaderInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AddHeaderInterceptor, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AddHeaderInterceptor, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class HttpInfoModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpInfoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: HttpInfoModule, declarations: [HttpInfoComponent], imports: [CommonModule, BrowserModule, HttpClientModule, FormsModule], exports: [HttpInfoComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpInfoModule, providers: [
            {
                provide: HTTP_INTERCEPTORS,
                useClass: AddHeaderInterceptor,
                multi: true
            }
        ], imports: [CommonModule, BrowserModule, HttpClientModule, FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpInfoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HttpInfoComponent
                    ],
                    imports: [
                        CommonModule, BrowserModule, HttpClientModule, FormsModule
                    ],
                    exports: [
                        HttpInfoComponent
                    ],
                    providers: [
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: AddHeaderInterceptor,
                            multi: true
                        }
                    ]
                }]
        }] });

/*
 * Public API Surface of http-info
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HttpInfoComponent, HttpInfoModule, HttpInfoService };
//# sourceMappingURL=http-info.mjs.map
