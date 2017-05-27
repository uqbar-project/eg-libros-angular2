import {PipeTransform, Pipe, Injectable} from "@angular/core";
import {Libro} from "../model/libro";

@Pipe({
  name: 'filterLibros'
})
export class LibrosPipe implements PipeTransform {

  transform(libros: Libro[], palabra: string): any {
    return libros.filter(libro => libro.contiene(palabra));
  }
}
