import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccountComponentComponent } from './form-account-component.component';

describe('FormAccountComponentComponent', () => {
  let component: FormAccountComponentComponent;
  let fixture: ComponentFixture<FormAccountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAccountComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAccountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
