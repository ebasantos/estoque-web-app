import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostContryComponent } from './post-contry.component';

describe('PostContryComponent', () => {
  let component: PostContryComponent;
  let fixture: ComponentFixture<PostContryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostContryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostContryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
