import {Libro} from "../model/libro";

export class LibrosService{

  todosLosLibros(): Libro[]{
    return [
      new Libro('The design of every day things', 'Don Norman'),
      new Libro('El nombre del viento', 'Patrik Rufus'),
      new Libro('Cancion de Hielo y Fuego', 'R.R. Martin'),
      new Libro('Las venas abiertas de america Latina', 'Galeano'),
      new Libro('A sangre fria', 'Truman Capote'),
      new Libro('100 años de soledad', 'García marquez'),
      new Libro('Kryptonita', 'Oyola'),
      new Libro('Historia de un loco', 'Katzenbach'),
      new Libro('Don´t make me think', 'Steve Krug'),
      new Libro('Management 3.0', 'Jurgen')
    ]
  }

}
