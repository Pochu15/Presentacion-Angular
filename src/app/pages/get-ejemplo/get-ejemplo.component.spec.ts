import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEjemploComponent } from './get-ejemplo.component';

describe('GetEjemploComponent', () => {
  let component: GetEjemploComponent;
  let fixture: ComponentFixture<GetEjemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEjemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
