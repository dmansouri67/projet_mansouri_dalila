import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadrestComponentComponent } from './headrest-component.component';

describe('HeadrestComponentComponent', () => {
  let component: HeadrestComponentComponent;
  let fixture: ComponentFixture<HeadrestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadrestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadrestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
