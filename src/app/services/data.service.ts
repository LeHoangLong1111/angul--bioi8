import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  constructor() { }

  // getDataFromApi(): Observable<any> {
  //   return this.httpClient.get('https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01').pipe(
  //     tap((data: any) => {
  //       // Loading
  //     }),
  //     catchError(err => {
  //       return this.handleErr(err);
  //     })
  //   );
  // }

  // handleErr(err: any) {
  //   switch (err.status) {
  //     case 500:
  //       alert(err.error);
  //       break;

  //     default:
  //       break;
  //   }
  //   return throwError(err);
  // }
}
