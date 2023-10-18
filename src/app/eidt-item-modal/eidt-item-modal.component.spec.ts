import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtItemModalComponent } from './eidt-item-modal.component';

describe('EidtItemModalComponent', () => {
  let component: EidtItemModalComponent;
  let fixture: ComponentFixture<EidtItemModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EidtItemModalComponent]
    });
    fixture = TestBed.createComponent(EidtItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
