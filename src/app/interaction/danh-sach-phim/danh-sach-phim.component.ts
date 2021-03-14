import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ItemPhimComponent } from '../item-phim/item-phim.component';
import { DataService } from 'src/app/services/data.service';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  @ViewChildren(ItemPhimComponent)
  tagListItemPhim: QueryList<ItemPhimComponent> = new QueryList<ItemPhimComponent>();
  danhSachPhim: any;
  danhSachPhimFromApi: any;

  constructor(private dataService: DataService, private phimService: PhimService) { }

  ngOnInit(): void {
    this.danhSachPhim = this.dataService.danhSachPhim;
    this.phimService.getListFilm().subscribe((data: any) => {
      this.danhSachPhimFromApi = data;
      console.log(this.danhSachPhimFromApi);
    });

  }

  thich(data: any) {
    this.dataService.danhSachPhim.forEach(item => {
      if (item.id === data.id) {
        item.soLike++;
      }
    });
    console.log(data);
  }

  thayDoiGia() {
    console.log(this.tagListItemPhim);
    this.tagListItemPhim.forEach(itemPhim => {
      if (itemPhim.phim.id === 2 || itemPhim.phim.id === 3) {
        itemPhim.phim.giaPhim = 200;
      }
    });
  }

}
