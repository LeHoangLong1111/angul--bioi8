import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  constructor(private httpClient: HttpClient) { }

  logIn(account: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.httpClient.post(api, account).pipe(tap(),
    catchError(err => {
      return this.handleErr(err);
    })
    );
  }

  handleErr(err: any){
    switch (err.status){
      case 500:
        alert(err.error);
        break;
      default:
        break;
    }
    return throwError(err);
  }
}
