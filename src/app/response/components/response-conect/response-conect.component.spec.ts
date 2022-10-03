import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseConectComponent } from './response-conect.component';

describe('ResponseConectComponent', () => {
  let component: ResponseConectComponent;
  let fixture: ComponentFixture<ResponseConectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseConectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseConectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
