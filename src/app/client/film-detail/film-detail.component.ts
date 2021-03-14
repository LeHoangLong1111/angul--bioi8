import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  maPhim = '';

  constructor(private activatedRoute: ActivatedRoute,
    private phimService: PhimService) { }

  ngOnInit(): void {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params);
    });
    this.phimService.getFilmDetail(this.maPhim).subscribe(res => {
      console.log(res);
    });
  }

}
