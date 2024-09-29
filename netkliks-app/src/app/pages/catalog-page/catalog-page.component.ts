import { Component } from '@angular/core';
import { MovieType } from '../../models/movie.models';
import { movie } from '../../constants/movie.constants';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {
  public movies: MovieType[] = movie
}
