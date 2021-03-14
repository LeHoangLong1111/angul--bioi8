import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  status = true;

  constructor() { }

  ngOnInit(): void {
  }

  dangNhap() {
    this.status = true;
  }

  dangXuat() {
    this.status = false;
  }

}
