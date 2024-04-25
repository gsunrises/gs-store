import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class AddHeaderInterceptor {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWhlYWRlci1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2h0dHAtaW5mby9zcmMvbGliL3NlcnZpY2UvYWRkLWhlYWRlci1pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU8zQyxNQUFNLE9BQU8sb0JBQW9CO0lBQzdCLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUdELFNBQVMsQ0FBQyxHQUFxQjtRQUMzQixJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNsRCxJQUFJLElBQUksR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3hGLENBQUM7K0dBVlEsb0JBQW9CO21IQUFwQixvQkFBb0IsY0FIakIsTUFBTTs7NEZBR1Qsb0JBQW9CO2tCQUpoQyxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIlxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkSGVhZGVySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5hZGRIZWFkZXIocmVxKSlcbiAgICB9XG5cblxuICAgIGFkZEhlYWRlcihyZXE6IEh0dHBSZXF1ZXN0PGFueT4pIHtcbiAgICAgICAgbGV0IGxvY2FsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2luJykgfHwgJ3t9JztcbiAgICAgICAgbGV0IGRhdGE6IGFueSA9IEpTT04ucGFyc2UobG9jYWwpO1xuICAgICAgICByZXR1cm4gcmVxLmNsb25lKHsgc2V0SGVhZGVyczogeyAndG9rZW4nOiBkYXRhLnRva2VuLCB1c2VybG9naW46IGRhdGEudXNlcmxvZ2luIH0gfSlcbiAgICB9XG59Il19