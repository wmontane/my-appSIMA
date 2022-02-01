import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-angular';
  nombreEstudiante: string = 'Willam Ontaneda';
  edadEstudiante: number = 34;
  horaActual: Date = new Date();
  logAcumulador: string[] = [];
  timeStamps: number[] = [];

  colors: Color[] = [
    {
      redSocial: 'Red',
      color: '#f00'
    },
    {
      redSocial: 'Green',
      color: '#0f0'
    },
    {
      redSocial: 'Blue',
      color: '#00f'
    }
  ];

  onCLickCard(){
    console.log('OnclickCard')
  }

  mostrarConsola(phone:String): void{
    console.log(phone)
  }

  mostrarHora(event: any): void {
    this.horaActual = new Date();
    const { target } = event;
    target.innerHTML = `Cambio la hora ${this.horaActual.getSeconds()}`;
  }

  insertLogAcumulador(log: string): void {
    this.logAcumulador.push(log);
  }

  addToTimeStamps($event: number) {
    this.timeStamps.push($event);
  }

  clearTimeStamps() {
    this.timeStamps = [];
  }


}

interface Color {
  redSocial: string;
  color: string;
}