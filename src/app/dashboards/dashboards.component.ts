import { Component, OnInit } from '@angular/core';
import { initDashboard } from "app/share/init-dashboard";
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    $(initDashboard);
  }
OnClick(id){
  this.router.navigate(["/cards",id])
}
}
