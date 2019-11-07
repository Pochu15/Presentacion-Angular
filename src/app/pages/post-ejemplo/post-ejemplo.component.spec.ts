import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEjemploComponent } from './post-ejemplo.component';

describe('PostEjemploComponent', () => {
  let component: PostEjemploComponent;
  let fixture: ComponentFixture<PostEjemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEjemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
