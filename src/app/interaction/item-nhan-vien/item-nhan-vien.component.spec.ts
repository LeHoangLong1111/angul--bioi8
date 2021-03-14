import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNhanVienComponent } from './item-nhan-vien.component';

describe('ItemNhanVienComponent', () => {
  let component: ItemNhanVienComponent;
  let fixture: ComponentFixture<ItemNhanVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNhanVienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
