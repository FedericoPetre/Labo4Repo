import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto.component';
import { DetalleCompletoProductoPaisComponent } from 'src/app/componentes/detalle-completo-producto-pais/detalle-completo-producto-pais.component';
import { ProductosListadoPublicoComponent } from 'src/app/componentes/productos-listado-publico/productos-listado-publico.component';
import { loginGuard } from 'src/app/guards/login-guard.guard';
import { AltaProductoComponent } from 'src/app/componentes/alta-producto/alta-producto.component';

const routes: Routes = [{ path: '', component: ProductoComponent,
children:
[{path:'detalleProducto', component:DetalleCompletoProductoPaisComponent, title:'detalle producto', canActivate:[loginGuard]},
{path:'listadoPublicoProducto', component:ProductosListadoPublicoComponent, title:'Listado público de productos'},
{path:'altaProducto', component:AltaProductoComponent, title:'Alta de Productos', canActivate:[loginGuard]}
]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
