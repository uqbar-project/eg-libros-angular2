export class Libro{

  private titulo: string;
  private autor: string;

  constructor(_titulo: string, _autor: string){
    this.titulo = _titulo;
    this.autor = _autor;
  }

  public contiene(palabra: string){
    return this.titulo.toLowerCase().includes(palabra) || this.autor.toLowerCase().includes(palabra)
  }
}
