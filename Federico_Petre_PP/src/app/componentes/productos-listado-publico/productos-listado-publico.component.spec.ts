import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosListadoPublicoComponent } from './productos-listado-publico.component';

describe('ProductosListadoPublicoComponent', () => {
  let component: ProductosListadoPublicoComponent;
  let fixture: ComponentFixture<ProductosListadoPublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosListadoPublicoComponent]
    });
    fixture = TestBed.createComponent(ProductosListadoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
