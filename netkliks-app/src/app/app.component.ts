import { Component } from '@angular/core';
import { MovieType } from './models/movie.models';
import { movie } from './constants/movie.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public movies: MovieType[] = movie
}
