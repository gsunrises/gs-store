import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./service/app.service";
export class HttpInfoComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
        console.log('123');
        this.appService.getListHttp({ aa: '11' });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpInfoComponent, deps: [{ token: i1.AppService }], target: i0.ɵɵFactoryTarget.Component }); }
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
        }], ctorParameters: function () { return [{ type: i1.AppService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2h0dHAtaW5mby9zcmMvbGliL2h0dHAtaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBYTFDLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsWUFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBR2hDLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUVsQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQzNDLENBQUM7K0dBWlUsaUJBQWlCO21HQUFqQixpQkFBaUIscURBUmxCOzs7O0dBSVQ7OzRGQUlVLGlCQUFpQjtrQkFWN0IsU0FBUzsrQkFDRSxlQUFlLFlBQ2Y7Ozs7R0FJVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9hcHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1odHRwLWluZm8nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgaHR0cC1pbmZvIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSHR0cEluZm9Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXBwU2VydmljZTogQXBwU2VydmljZVxuICApIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJzEyMycpXG5cbiAgICB0aGlzLmFwcFNlcnZpY2UuZ2V0TGlzdEh0dHAoeyBhYTogJzExJyB9KVxuICB9XG5cbn0iXX0=