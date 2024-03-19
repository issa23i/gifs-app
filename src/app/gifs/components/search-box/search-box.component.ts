import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar:</h5>
  <!-- la etiqueta #txtTagImput la usa el decorador @ViewChild  para referenciar al elemento html -->
            <input type="text"
            class="form-control"
            placeholder="Buscar gifs..."
            (keyup.enter)="searchTag()"
            #txtTagImput>`
})

export class SearchBoxComponent  {
  // ViewChild para obtener el input de texto
  @ViewChild('txtTagImput')
  tagInput!: ElementRef<HTMLInputElement>
  constructor() { }

  // Funcion para buscar gifs
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });
  }

}
