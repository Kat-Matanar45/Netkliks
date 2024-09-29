import { Component, OnInit } from '@angular/core';
import { MovieType } from '../../models/movie.models';
import { movie } from '../../constants/movie.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent implements OnInit {
  public movies: MovieType[] = []
  public mov!: MovieType

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _filmServices: FilmService
  ) {

  }
  ngOnInit(): void {
  //  throw new Error('Method not implemented.');
    const id = this._route.snapshot.paramMap.get('id');

    this.movies = this._filmServices.getFullMovies;
    this._initFilm(Number(id));
  }

  private _initFilm(id: number) {
    const findFilm = this.movies.find(mov => mov.id === id)

    if (findFilm) {
      this.mov = findFilm
    } else {this._router.navigate(['/'])}
  }
}
