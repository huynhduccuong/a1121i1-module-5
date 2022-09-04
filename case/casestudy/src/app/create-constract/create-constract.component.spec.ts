import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConstractComponent } from './create-constract.component';

describe('CreateConstractComponent', () => {
  let component: CreateConstractComponent;
  let fixture: ComponentFixture<CreateConstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
