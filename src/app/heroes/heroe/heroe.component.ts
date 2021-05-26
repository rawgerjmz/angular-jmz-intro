import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitaizado(): string {
        return this.nombre.toUpperCase();
    }

    constructor() { }

    ngOnInit(): void {
    }

    obtenerNombre(): string {
        return `${ this.nombre }-${ this.edad }`;
    }

    cambiarNombre(): void{
        this.nombre = 'Hulk';
    }

    cambiarEdad(): void {
        this.edad = 40;
    }

}
