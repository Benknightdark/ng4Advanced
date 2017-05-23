import { Component, OnInit } from '@angular/core';
import { initDashboard } from "app/share/init-dashboard";

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(initDashboard);
  }

}
