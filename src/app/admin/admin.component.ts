import { Component, OnInit } from '@angular/core';
import { AccountManagementService } from '../services/account-management.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private qltkService: AccountManagementService) { }

  ngOnInit(): void {

  }

  dangNhapAdmin(form: any){
    const objDangNhap = {
        taiKhoan: form.value.taiKhoan,
        matKhau: form.value.matKhau
    };
    this.qltkService.logIn(objDangNhap).subscribe(data => {
      if (data) {
        console.log("Có data");
        localStorage.setItem('user',  JSON.stringify(data));
      }
      else {
        alert("Đăng nhập thất abji")
      }
    });

  }

}
