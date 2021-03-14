import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  danhSachNhanVien = [
    {
      ten: 'Tay',
      tuoi: '20'
    },
    {
      ten: 'Nam',
      tuoi: '21'
    },
    {
      ten: 'Abc',
      tuoi: '22'
    },
    {
      ten: 'Nguyen',
      tuoi: '22'
    }
  ];

  danhSachSanPham: any[] = [
    // {
    //   maSanPham: 'Test MSP',
    //   tenSanPham: 'Test ten',
    //   giaSanPham: 'Test gia'
    // }
  ];

  listMovie: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.listMovie = this.dataService.danhSachPhim;
  }

  themSP(maSP: string, tenSP: string, giaSP: string) {
    const objSP = {
      maSanPham: maSP,
      tenSanPham: tenSP,
      giaSanPham: giaSP
    };
    this.danhSachSanPham.push(objSP);
  }

}
