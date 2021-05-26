import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    heroes: string[] = [
        'Hulk',
        'Spiderman',
        'Ironman',
        'Thor',
        'Kakaroto'
    ];

    heroesBorrados: string[] = [];

    borrarHeroe(): void {
        const heroe = this.heroes.shift();

        if( heroe )
            this.heroesBorrados.push(heroe);
    }

}
