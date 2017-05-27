import { Component } from '@angular/core';
import {LibrosService} from "./services/libros.services";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [LibrosService]
})
export class AppComponent {

  libros;
  textoABuscar: string = ''

  constructor(librosService: LibrosService){
    this.libros = librosService.todosLosLibros()
  }

}
