import { Component, OnInit } from '@angular/core';
import { FlotCharts } from "app/share/init-flotchart";

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(FlotCharts)
  }

}
