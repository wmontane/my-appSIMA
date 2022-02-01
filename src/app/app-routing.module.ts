import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoCuentaComponent } from './catalogo/tipo-cuenta/tipo-cuenta.component';
import {AcumuladorComponent} from './shared/acumulador/acumulador.component';
import {CronometroComponent} from './shared/cronometro/cronometro.component';
const routes: Routes = [
  {path: 'Acumulador',component: AcumuladorComponent},
  {path: 'Cronometro',component: CronometroComponent},
  {path: 'Tipo-cuenta',component: TipoCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }