import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {
  danhSachNguoiDung: any[] =[];
  usernamePattern = /^[a-z]{6,32}$/i;
  tkValue="Test tai Khoan";

  constructor() { }

  ngOnInit(): void {
  }

  dangKy(form: any){
    console.log(form);

    const objDangKy={
      email: form.value.email,
      hoTen: form.value.hoTen,
      matKhau: form.value.matKhau,
      sdt: form.value.sdt,
      taiKhoan: form.value.taiKhoan,
    }

    this.danhSachNguoiDung.push(objDangKy);

  }


}

