import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() phim: any;
  @Output() eventPhim = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  like(): void {
    this.eventPhim.emit(this.phim);
  }

}
