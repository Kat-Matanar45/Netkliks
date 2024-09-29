import { Component, OnInit } from '@angular/core';
import { MovieType } from '../../models/movie.models';
import { movie } from '../../constants/movie.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent implements OnInit {
  public movies: MovieType[] = movie
  public mov!: MovieType

  constructor(
    private _route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
  //  throw new Error('Method not implemented.');
    const id = this._route.snapshot.paramMap.get('id');

    this._initFilm(Number(id));
  }

  private _initFilm(id: number) {
    const findFilm = this.movies.find(mov => mov.id === id)

    if (findFilm) {
      this.mov = findFilm
    }
  }
}
