import { User } from './interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /*
    VARIABLES - SU VALOR PUEDE SER USADO EN EL HTML.
    CUANDO LAS VARIABLES CAMBIAN, LA VISTA DE LA PÁGINA TAMBIÉN
    ...por algo se llama HTML dinámico...
  */
  title = 'Presentacion Angular - Ejemplos.';

  // Estas variables se utilizan para estilizar los botones. Son opcionales
  ejemplo1 = false;
  ejemplo2 = false;

  /*
    El constructor sirve para poder usar funciones definidas en otros archivos (servicios).
    En este caso, importamos router (Se importa automáticamente en visual studio code con el plugin
    de Angular) para poder navegar al hacer click en los botones definidos más adelante.
  */
  constructor(private router: Router) {}

  // La función ngOnInit() se llamará cuando se cargue la vista por primera vez.
  ngOnInit() {
    if (window.location.pathname === '/get') {
      this.ejemplo1 = true;
    } else if (window.location.pathname === '/segundo') { this.ejemplo2 = true; }
  }

  // La función toGet es llamada desde el HTML al hacer click en un botón.
  toGet() {
    this.router.navigateByUrl('/get');
    this.ejemplo1 = true;
    this.ejemplo2 = false;
  }
}
