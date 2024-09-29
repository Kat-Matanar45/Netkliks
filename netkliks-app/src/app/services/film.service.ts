import { Injectable } from '@angular/core';
import { MovieType } from '../models/movie.models';
import { movie } from '../constants/movie.constants';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private _movies: MovieType[] = movie
  private _searchString: string = ''

  constructor() { }

  public get getFullMovies(): MovieType[] {
    return this._movies
  }

  public get fulteredFilms(): MovieType[] {
    return this._movies.filter((item) => item.title.includes(this._searchString))
  }

  public get searchString(): string {
    return this._searchString
  }

  public set searchString(value: string) {
    this._searchString = value
  }
}
