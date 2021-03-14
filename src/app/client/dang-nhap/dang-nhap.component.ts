import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  formDangNhap: FormGroup = new FormGroup({});

  objAdmin = {
    taiKhoai: 'admin',
    matKhau: 'admin'
  };

  constructor() { }

  ngOnInit(): void {
    this.formDangNhap = new FormGroup({
      TaiKhoan: new FormControl(this.objAdmin.taiKhoai, [Validators.required, Validators.minLength(4)]),
      MatKhau: new FormControl(this.objAdmin.matKhau, Validators.required)

    });
  }

  dangNhap(reactiveForm: FormGroup){
    console.log(reactiveForm);
  };

}
