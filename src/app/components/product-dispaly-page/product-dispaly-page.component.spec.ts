import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDispalyPageComponent } from './product-dispaly-page.component';

describe('ProductDispalyPageComponent', () => {
  let component: ProductDispalyPageComponent;
  let fixture: ComponentFixture<ProductDispalyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDispalyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDispalyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
