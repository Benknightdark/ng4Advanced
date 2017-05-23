import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  typename: number
  ngOnInit() {
   // console.log(this.route.snapshot.params["type"]);
      this.route.params.subscribe(p =>
    { this.typename= p["types"] })

  }
  OnPlus() {
    this.route.params.subscribe(p =>
    { this.typename= (<number>p["types"])+1 })

  }
  OnMinus() {
          this.route.params.subscribe(p =>
          { this.typename= (<number>p["types"])-1 })

  }
}
