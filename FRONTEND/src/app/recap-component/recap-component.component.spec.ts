import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapComponentComponent } from './recap-component.component';

describe('RecapComponentComponent', () => {
  let component: RecapComponentComponent;
  let fixture: ComponentFixture<RecapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
