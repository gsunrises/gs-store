import { NgModule } from '@angular/core';
import { HttpInfoComponent } from './http-info.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddHeaderInterceptor } from './service/add-header-interceptor';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export class HttpInfoModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbmZvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2h0dHAtaW5mby9zcmMvbGliL2h0dHAtaW5mby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFzQjdDLE1BQU0sT0FBTyxjQUFjOytHQUFkLGNBQWM7Z0hBQWQsY0FBYyxpQkFoQnZCLGlCQUFpQixhQUdqQixZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsYUFHMUQsaUJBQWlCO2dIQVVSLGNBQWMsYUFSZDtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRixZQVhDLFlBQVksRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVzs7NEZBYWpELGNBQWM7a0JBbEIxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLFdBQVc7cUJBQzNEO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7cUJBQ2xCO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsb0JBQW9COzRCQUM5QixLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSW5mb0NvbXBvbmVudCB9IGZyb20gJy4vaHR0cC1pbmZvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFkZEhlYWRlckludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2aWNlL2FkZC1oZWFkZXItaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSHR0cEluZm9Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSwgQnJvd3Nlck1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEh0dHBJbmZvQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEFkZEhlYWRlckludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSHR0cEluZm9Nb2R1bGUgeyB9XG4iXX0=