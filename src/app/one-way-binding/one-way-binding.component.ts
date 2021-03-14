import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {

  name = 'FE56';

  constructor() { }

  ngOnInit(): void {
  }

  eventBinding(value: string) {
    console.log(value);
  }

}
