import { Component } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'lib-http-info',
  template: `
    <p>
      http-info works!
    </p>
  `,
  styles: [
  ]
})
export class HttpInfoComponent {

  constructor(
    private appService: AppService
  ) {

  }

  ngOnInit(): void {
    console.log('123')

    this.appService.getListHttp({ aa: '11' })
  }

}