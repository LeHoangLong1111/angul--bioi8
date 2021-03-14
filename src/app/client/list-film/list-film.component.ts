import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {

  listMovie: any;

  constructor(private phimService: PhimService) { }

  ngOnInit(): void {
    this.phimService.getListFilm().subscribe((data) => {
      this.listMovie = data;
    });
  }

}
