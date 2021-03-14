import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-nhan-vien',
  templateUrl: './item-nhan-vien.component.html',
  styleUrls: ['./item-nhan-vien.component.scss']
})
export class ItemNhanVienComponent implements OnInit {
  @Input() nhanVien: any;
  @Output() eventNV = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  like() {
    this.eventNV.emit(this.nhanVien);
  }

}
