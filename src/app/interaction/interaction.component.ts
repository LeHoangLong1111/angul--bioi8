import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  dataService = new DataService();
  @ViewChild(DanhSachPhimComponent)
  tagDanhSachPhim!: DanhSachPhimComponent; // Note: don't use new instance

  constructor() { }

  ngOnInit(): void {
  }

  themPhim(ma: any, ten: any, gia: any, anh: any) {
    const objPhim = {
      id: ma,
      tenPhim: ten,
      giaPhim: gia,
      hinhAnh: anh,
      soLike: 0,
      chiTietPhim: 'test chi tiet',
    };
    this.tagDanhSachPhim.danhSachPhim.push(objPhim);
    console.log(objPhim);
  }

}
