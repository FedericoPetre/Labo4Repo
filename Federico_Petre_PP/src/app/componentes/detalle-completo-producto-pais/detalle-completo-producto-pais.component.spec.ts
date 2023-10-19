import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCompletoProductoPaisComponent } from './detalle-completo-producto-pais.component';

describe('DetalleCompletoProductoPaisComponent', () => {
  let component: DetalleCompletoProductoPaisComponent;
  let fixture: ComponentFixture<DetalleCompletoProductoPaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCompletoProductoPaisComponent]
    });
    fixture = TestBed.createComponent(DetalleCompletoProductoPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
