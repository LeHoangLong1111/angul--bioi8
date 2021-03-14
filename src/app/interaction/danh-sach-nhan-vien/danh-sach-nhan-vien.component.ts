import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-nhan-vien',
  templateUrl: './danh-sach-nhan-vien.component.html',
  styleUrls: ['./danh-sach-nhan-vien.component.scss']
})
export class DanhSachNhanVienComponent implements OnInit {

  danhSachNV = [
    {
      id: 1,
      ten: 'Nhan Vien 1',
      tuoi: 18,
      soLike: 0
    },
    {
      id: 2,
      ten: 'Nhan Vien 2',
      tuoi: 19,
      soLike: 0
    },
    {
      id: 3,
      ten: 'Nhan Vien 3',
      tuoi: 20,
      soLike: 0
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  thich(nv: any) {
    this.danhSachNV.forEach(nhanvien => {
      if (nhanvien.id === nv.id) {
        nhanvien.soLike++;
      }
    });
  }

}
