import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  danhSachPhim = [
    {
      id: 1,
      tenPhim: 'test 1',
      chiTietPhim: 'test chi tiet',
      giaPhim: 2000000,
      hinhAnh: 'assets/images/abc.jpg',
      soLike: 0
    },
    {
      id: 2,
      tenPhim: 'test 2',
      chiTietPhim: 'test chi tiet',
      giaPhim: 2000000,
      soLike: 0
    },
    {
      id: 3,
      tenPhim: 'test 3',
      chiTietPhim: 'test chi tiet',
      giaPhim: 2000000,
      soLike: 0
    }
  ];

  constructor(private httpClient: HttpClient) { }

  getListFilm(): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';
    return this.httpClient.get(api).pipe(tap());
  }

  getFilmDetail(id: string): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=' + id;
    return this.httpClient.get(api).pipe(tap());
  }
}
