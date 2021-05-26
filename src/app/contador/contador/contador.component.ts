import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

    title = 'Contador App';
    numero: number = 0;
    base: number = 5;

    constructor() { }

    acumular( valor: number ): void {
        this.numero += valor;
    }

}
