import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'danh-sach-phim',
        component: ListFilmComponent
      },
      {
        path: 'chi-tiet/:id',
        component: FilmDetailComponent
      },
      {
        path: 'chi-tiet',
        component: FilmDetailComponent
      },

      {
        path: 'dang-ky',
        component: DangKyComponent
      },

      {
        path: 'dang-nhap',
        component: DangNhapComponent
      },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
