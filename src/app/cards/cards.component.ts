import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router, ActivatedRoute } from "@angular/router";
=======
import { Router,ActivatedRoute } from "@angular/router";
>>>>>>> 4736916f03892fa0e228c71a808152f7a4539b48

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

<<<<<<< HEAD
  constructor(private router: Router, private route: ActivatedRoute) { }
  typename: number
  ngOnInit() {
   // console.log(this.route.snapshot.params["type"]);
      this.route.params.subscribe(p =>
    { this.typename= p["types"] })
=======
   constructor(private router:Router,private route:ActivatedRoute) { }
typename:string
  ngOnInit() {
   console.log( this.route.snapshot.params["type"]);
    this.route.params.subscribe(p=>{this.typename= p["type"]})
>>>>>>> 4736916f03892fa0e228c71a808152f7a4539b48

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
