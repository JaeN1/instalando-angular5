import { Component } from '@angular/core';

@Component
(
  {
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
  }
)

export class VideojuegosComponent
{
  public nombre:string;
  public mejor_juego:string;
  public mejor_juego_retro:string;
  public mostrar_retro:boolean;
  public color:string;
  public year:number;

  public videojuegos:Array<any>;

  constructor()
  {
    this.nombre = 'Videojuegos 2018';
    this.mejor_juego = 'GTA V';
    this.mejor_juego_retro = "Mario";
    this.mostrar_retro = true;
    this.color = "yellow";
    this.year = 2018;
    this.videojuegos  =
      [
        'Los sims',
        'Asesinos',
        'GTA 5',
        'COD',
        'Tekken'
      ]
  }
}
