import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AcumuladorComponent } from './shared/acumulador/acumulador.component';
import { CronometroComponent } from './shared/cronometro/cronometro.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardComponent } from './shared/card/card.component';
import { TipoCuentaComponent } from './catalogo/tipo-cuenta/tipo-cuenta.component';
import { BtnloadingDirective } from './shared/directives/btnloading.directive';




@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent,
    CronometroComponent,
    NavbarComponent,
    CardComponent,
    TipoCuentaComponent,
    BtnloadingDirective,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }