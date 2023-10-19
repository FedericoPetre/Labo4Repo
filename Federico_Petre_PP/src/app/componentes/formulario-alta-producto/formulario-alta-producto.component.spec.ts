import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAltaProductoComponent } from './formulario-alta-producto.component';

describe('FormularioAltaProductoComponent', () => {
  let component: FormularioAltaProductoComponent;
  let fixture: ComponentFixture<FormularioAltaProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAltaProductoComponent]
    });
    fixture = TestBed.createComponent(FormularioAltaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
