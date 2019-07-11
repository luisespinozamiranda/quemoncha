import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private _translate: TranslateService) {

  }

  /**
    * Metodo encargado de obtener una etiqueta
    * @param etiqueta nombre de la etiqueta
  */
  public obtenerEtiqueta(etiqueta: string): string {
    let valorEtiqueta: string;
    this._translate.get(etiqueta)
      .subscribe((valor: string) => {
        valorEtiqueta = valor;
      });
    return valorEtiqueta;
  }
}
