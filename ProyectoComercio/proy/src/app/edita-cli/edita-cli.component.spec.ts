import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaCliComponent } from './edita-cli.component';

describe('EditaCliComponent', () => {
  let component: EditaCliComponent;
  let fixture: ComponentFixture<EditaCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
