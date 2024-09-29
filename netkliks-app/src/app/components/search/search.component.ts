import { Component } from '@angular/core';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public searchString: string = ''

  constructor(private _filmService: FilmService) {

  }

  public updateValue(event: Event) {
      const target = event.target as HTMLInputElement
      this.searchString = target.value
  }

  public updateSearch(event: Event) {
    this._filmService.searchString = this.searchString
  }
}
