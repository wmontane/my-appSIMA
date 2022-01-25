import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcumuladorComponent} from './acumulador/acumulador.component';
import {CronometroComponent} from './cronometro/cronometro.component';
const routes: Routes = [
  {path: 'Acumulador',component: AcumuladorComponent},
  {path: 'Cronometro',component: CronometroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }