import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 1, name: 'Jurassic Park' },
      { id: 2, name: 'Spider Man' },
      { id: 4, name: 'Bat Man' },
      { id: 5, name: 'Super Man' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Aero-Dynamics' },
      { id: 8, name: 'ABC' },
      { id: 9, name: 'XYZ' },
      { id: 10, name: 'Jumpers' }
    ];
    return {movies};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}