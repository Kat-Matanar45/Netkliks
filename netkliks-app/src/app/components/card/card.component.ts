import { Component, Input } from '@angular/core';
import { MovieType } from '../../models/movie.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() mov!: MovieType
}
