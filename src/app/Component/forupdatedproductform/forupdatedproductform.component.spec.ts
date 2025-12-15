import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForupdatedproductformComponent } from './forupdatedproductform.component';

describe('ForupdatedproductformComponent', () => {
  let component: ForupdatedproductformComponent;
  let fixture: ComponentFixture<ForupdatedproductformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForupdatedproductformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForupdatedproductformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
