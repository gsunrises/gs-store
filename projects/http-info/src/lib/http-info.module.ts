import { NgModule } from '@angular/core';
import { HttpInfoComponent } from './http-info.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddHeaderInterceptor } from './service/add-header-interceptor';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
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
})
export class HttpInfoModule { }
