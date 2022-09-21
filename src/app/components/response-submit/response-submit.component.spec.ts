import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSubmitComponent } from './response-submit.component';

describe('ResponseSubmitComponent', () => {
  let component: ResponseSubmitComponent;
  let fixture: ComponentFixture<ResponseSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
