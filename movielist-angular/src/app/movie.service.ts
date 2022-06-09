import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
constructor(private messageService: MessageService) { }

  getMovies(): Observable<Movie[]> {
    const movies = of(MOVIES);
    this.messageService.add('MovieService: fetched movies');
    return movies;
  }
  
  getMovie(id: number): Observable<Movie> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const movie = MOVIES.find(h => h.id === id)!;
    this.messageService.add(`MovieService: fetched movie id=${id}`);
    return of(movie);
  }
}
