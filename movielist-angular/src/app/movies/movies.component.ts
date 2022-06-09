import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';
import { MovieService} from '../movie.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  
  // movies = MOVIES;
   
 // selectedMovie?: Movie;
 movies: Movie[] = [];
  constructor(private movieService: MovieService) { }//, private messageService: MessageService

 
  ngOnInit(): void { 
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
        .subscribe(movies => this.movies = movies);
  }
/*
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    this.messageService.add(`MoviesComponent: Selected movie id=${movie.id}`);
  }
*/
}
