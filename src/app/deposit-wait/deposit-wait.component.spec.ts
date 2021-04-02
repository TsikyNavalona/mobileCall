import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositWaitComponent } from './deposit-wait.component';

describe('DepositWaitComponent', () => {
  let component: DepositWaitComponent;
  let fixture: ComponentFixture<DepositWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositWaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
