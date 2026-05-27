import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DallageComponent } from './dallage.component';

describe('DallageComponent', () => {
  let component: DallageComponent;
  let fixture: ComponentFixture<DallageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DallageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DallageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
