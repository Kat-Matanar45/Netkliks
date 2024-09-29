import { Component } from '@angular/core';
import { MovieType } from '../../models/movie.models';
import { movie } from '../../constants/movie.constants';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {
  constructor(
    private _filmServices: FilmService
  ) {}

  public get movie(): MovieType[] {
    return this._filmServices.fulteredFilms
  }
}