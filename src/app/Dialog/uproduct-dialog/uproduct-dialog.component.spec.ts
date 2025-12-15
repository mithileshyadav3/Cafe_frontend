import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UproductDialogComponent } from './uproduct-dialog.component';

describe('UproductDialogComponent', () => {
  let component: UproductDialogComponent;
  let fixture: ComponentFixture<UproductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UproductDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UproductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
