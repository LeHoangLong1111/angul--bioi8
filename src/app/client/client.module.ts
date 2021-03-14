import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { ListFilmComponent } from './list-film/list-film.component';
import { FilmComponent } from './film/film.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';




@NgModule({
  declarations: [ClientComponent, ListFilmComponent, FilmComponent, FilmDetailComponent, DangKyComponent, DangNhapComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
