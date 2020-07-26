import { Movies } from '../movie-datas';
import { Component } from '@angular/core';

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})
export class MoviesComponent {
    title = 'Movie List';
    movies = Movies;

}