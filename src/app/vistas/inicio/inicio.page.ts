import { Component, OnInit } from '@angular/core';

interface Pagina {
  icono: string,
  nombre: string,
  direccion: string,
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  paginas: Pagina[] = [
    {
      icono: "airplane-outline",
      nombre: "Nosotros",
      direccion: "/nosotros",
    },
    {
      icono: "bag-outline",
      nombre: "Contacto",
      direccion: "/contacto",
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
