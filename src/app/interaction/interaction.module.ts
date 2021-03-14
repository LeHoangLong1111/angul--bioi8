import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { DanhSachNhanVienComponent } from './danh-sach-nhan-vien/danh-sach-nhan-vien.component';
import { ItemNhanVienComponent } from './item-nhan-vien/item-nhan-vien.component';
import { InteractionRoutingModule } from './interaction-routing.module';


@NgModule({
  declarations: [InteractionComponent, DanhSachPhimComponent, ItemPhimComponent, DanhSachNhanVienComponent, ItemNhanVienComponent],
  imports: [
    CommonModule,
    InteractionRoutingModule
  ],
  exports: [InteractionComponent]
})
export class InteractionModule { }
