import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InteractionComponent } from './interaction.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';

const routes: Routes = [
  {
    path: 'interaction',
    component: InteractionComponent,
    children: [
      {
        path: 'danh-sach-phim', component: DanhSachPhimComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionRoutingModule { }
