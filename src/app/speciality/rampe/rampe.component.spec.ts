import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RampeComponent } from './rampe.component';

describe('RampeComponent', () => {
  let component: RampeComponent;
  let fixture: ComponentFixture<RampeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RampeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RampeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
