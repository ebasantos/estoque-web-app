import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCountryComponent } from './get-country.component';

describe('GetCountryComponent', () => {
  let component: GetCountryComponent;
  let fixture: ComponentFixture<GetCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
