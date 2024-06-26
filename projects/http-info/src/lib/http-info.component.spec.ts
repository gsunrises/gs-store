import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpInfoComponent } from './http-info.component';

describe('HttpInfoComponent', () => {
  let component: HttpInfoComponent;
  let fixture: ComponentFixture<HttpInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpInfoComponent]
    });
    fixture = TestBed.createComponent(HttpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
